/**
 * @file Implements DAO managing data storage of message. Uses mongoose MessageModel
 * to integrate with MongoDB
 */

import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/MessageModel";
import Message from "../models/Message";

/**
 * @class MessagesDao Implements Data Access Object managing data storage
 * of messages
 * @property {MessagesDao} messageDao Private single instance of MessageDao
 */
export default class MessagesDao implements MessageDaoI {
    private static messageDao: MessagesDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns MessagesDao
     */

    public static getInstance = (): MessagesDao => {
        if (MessagesDao.messageDao === null) {
            MessagesDao.messageDao = new MessagesDao();
        }
        return MessagesDao.messageDao;
    }

    private constructor() {
    }


    /**
     * Inserts message instance into database
     * @param {string} sio
     * @param {string} rid
     * @returns Promise To be notified when message is inserted into the database
     */
    sendAMessage = async (sid: string, rid: string, message: Message): Promise<Message> =>
       MessageModel.create({userSending: sid, userReceiving: rid, message: message.message})

    /**
     * Removes message from the database.
     * @param {string} mid Primary key of message to be removed
     * @returns Promise To be notified when message is removed from the database
     */
    deleteAMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid})

    /**
     * Uses MessageDao to retrieve message resources from the database
     * @param {string} uid Primary key of user
     * @returns Promise To be notified when all messages received from the database
     */
    findAllMessagesReceived =  async (uid: string): Promise<Message[]> =>
        MessageModel.find({userReceiving: uid}, {_id:0, userSending: 0, userReceiving: 0})

    /**
     * Uses MessageDao to retrieve message resources from the database
     * @param {string} uid Primary key of a user
     * @returns Promise To be notified when all messages received from the database
     */
    findAllMessagesSent =  async (uid: string): Promise<Message[]> =>
        MessageModel.find({userSending: uid}, {_id:0, userReceiving: 0, userSending: 0})

}
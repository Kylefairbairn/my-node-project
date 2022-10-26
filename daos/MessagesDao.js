/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import MessageModel from "../mongoose/MessageModel";
/**
 * @class MessagesDao Implements Data Access Object managing data storage
 * of Users
 * @property {MessagesDao} messageDao Private single instance of UserDao
 */
export default class MessagesDao {
    constructor() {
        /**
         * Inserts message instance into database
         * @param {string} sio
         * @param {string} rid
         * @returns Promise To be notified when message is inserted into the database
         */
        this.sendAMessage = (sid, rid, message) => __awaiter(this, void 0, void 0, function* () { return MessageModel.create({ userSending: sid, userReceiving: rid, message: message.message }); });
        /**
         * Removes message from the database.
         * @param {string} mid Primary key of message to be removed
         * @returns Promise To be notified when message is removed from the database
         */
        this.deleteAMessage = (mid) => __awaiter(this, void 0, void 0, function* () { return MessageModel.deleteOne({ _id: mid }); });
        /**
         * Uses MessageDao to retrieve message resources from the database
         * @param {string} uid Primary key of user
         * @returns Promise To be notified when all messages received from the database
         */
        this.findAllMessagesReceived = (uid) => __awaiter(this, void 0, void 0, function* () { return MessageModel.find({ userReceiving: uid }, { _id: 0, userSending: 0, userReceiving: 0 }); });
        /**
         * Uses MessageDao to retrieve message resources from the database
         * @param {string} uid Primary key of a user
         * @returns Promise To be notified when all messages recieved from the database
         */
        this.findAllMessagesSent = (uid) => __awaiter(this, void 0, void 0, function* () { return MessageModel.find({ userSending: uid }, { _id: 0, userReceiving: 0, userSending: 0 }); });
    }
}
MessagesDao.messageDao = null;
/**
 * Creates singleton DAO instance
 * @returns MessagesDao
 */
MessagesDao.getInstance = () => {
    if (MessagesDao.messageDao === null) {
        MessagesDao.messageDao = new MessagesDao();
    }
    return MessagesDao.messageDao;
};

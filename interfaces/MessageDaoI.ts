import Message from "../models/Message";

/**
 * @file Declares API for Message related data access object methods
 */

export default interface MessageDaoI{

    sendAMessage(sid: string, rid: string, message: Message): Promise<Message>
    findAllMessagesSent(uid:string): Promise<Message[]>
    findAllMessagesReceived(uid: string): Promise<Message[]>
    deleteAMessage(mid: string): Promise<any>

}
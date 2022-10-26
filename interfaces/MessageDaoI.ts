import Message from "../models/Message";

/**
 * @file Declares API for Message related data access object methods
 */

export default interface MessageDaoI{
    // do i need two users here??
    sendAMessage(sid: string, rid: string, message: Message): Promise<any>
    findAllMessagesSent(uid:string): Promise<any>
    findAllMessagesReceived(uid: string): Promise<any>
    deleteAMessage(mid: string): Promise<any>

}
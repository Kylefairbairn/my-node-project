import Message from "../models/Message";


export default interface MessageDaoI{
    // do i need two users here??
    sendAMessage(message:Message): Promise<Message>
    findAllMessagesSent(uid:string): Promise<Message[]>
    findAllMessagesReceived(uid: string): Promise<Message[]>
    deleteAMessage(mid: string): Promise<any>
    findAllMessagesFromAUser(uid: string): Promise<Message[]>
    updateAMessage(mid: string): Promise<any>
}
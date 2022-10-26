// import MessageModel from "../mongoose/MessageModel";
// import Message from "../models/Message";
// import retryTimes = jest.retryTimes;
// import Bookmark from "../models/Bookmark";
// import UserModel from "../mongoose/UserModel";
// import messageModel from "../mongoose/MessageModel";
//
//
// export default class MessagesDao {
//
//     public async createAMessage(sid: string, rid: string, message: Message): Promise<Message> {
//
//         const messageModel = await MessageModel.create({userSending: sid, userReceiving: rid, message: message.message})
//
//         return new Message(
//             messageModel?._id.toString(),
//             sid,
//             rid,
//             messageModel?.message??''
//         )
//
//     }
//
//     public async viewMessagesSent(uid: string): Promise<Message[]>{
//
//         const messageModel = await MessageModel.find({userSending: uid});
//
//         const eachMessage = messageModel.map((messageModel) => {
//             return new Message(
//                 messageModel?._id.toString()??'',
//                 messageModel.userSending?.toHexString()??'',
//                 messageModel.userReceiving?.toHexString()??'',
//                 messageModel?.message??''
//             )
//         });
//
//
//         return eachMessage;
//     }
//
//     public async viewMessagesReceived(uid: string): Promise<Message[]>{
//
//         const messageModel = await MessageModel.find({userReceiving: uid});
//
//         const eachMessage = messageModel.map((messageModel) => {
//             return new Message(
//                 messageModel?._id.toString()??'',
//                 messageModel.userSending?.toHexString()??'',
//                 messageModel.userReceiving?.toHexString()??'',
//                 messageModel?.message??''
//             )
//         });
//
//         return eachMessage;
//
//     }
//
//     public async viewAllMessagesBetweenUsers(fuid: string, suid: string): Promise<any>{
//
//         const messageModelOne = await MessageModel.find({userReceiving: fuid, userSending: suid})
//         const messageModelTwo = await MessageModel.find({userReceiving: suid, userSending: fuid})
//
//         const userOne = messageModelOne.map((messageModelOne) => {
//             return new Message(
//                 messageModelOne?._id.toString()??'',
//                 messageModelOne.userSending?.toHexString()??'',
//                 messageModelOne.userReceiving?.toHexString()??'',
//                 messageModelOne?.message??''
//             )
//         })
//
//         const userTwo = messageModelTwo.map((messageModelTwo) => {
//             return new Message(
//                 messageModelTwo?._id.toString() ?? '',
//                 messageModelTwo.userSending?.toHexString() ?? '',
//                 messageModelTwo.userReceiving?.toHexString() ?? '',
//                 messageModelTwo?.message ?? ''
//             )
//         })
//
//
//         const all = {userOne,userTwo}
//
//         return all
//
//     }
//
//     public async countMessages(uid: string): Promise<any>{
//
//         const messageModel = await MessageModel.find({userReceiving: uid});
//
//         let counter = 0
//
//         const eachMessage = messageModel.map((messageModel) => {
//             counter++
//             return new Message(
//                 messageModel?._id.toString()??'',
//                 messageModel.userSending?.toHexString()??'',
//                 messageModel.userReceiving?.toHexString()??'',
//                 messageModel?.message??''
//             )
//         });
//         return counter
//
//     }
//
//     public async deleteMessage(mid: string): Promise<any>{
//         return await MessageModel.deleteOne({_id: mid});
//     }
//
//     public async updatesAMessage(mid: string, message:Message): Promise<any>{
//         return await MessageModel.updateOne({_id: mid}, {$set: message})
//     }
//
// }
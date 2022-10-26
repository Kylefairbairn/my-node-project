// import {Express, Request, Response} from "express";
// import MessagesDao from "../daos/MessagesDao";
//
//
// export default class MessageController {
//     app: Express;
//     messageDao: MessagesDao;
//     constructor(app: Express, messageDao: MessagesDao) {
//         this.app = app;
//         this.messageDao = messageDao;
//         this.app.post("/api/users/:sid/messages/:rid", this.createAMessage);
//         this.app.get('/api/user/:uid/messages/sent', this.viewMessagesSent)
//         this.app.get('/api/user/:uid/messages/received', this.viewMessagesReceived)
//         this.app.delete('/api/messages/:mid', this.deleteMessage)
//         this.app.put('/api/messages/:mid', this.updatesAMessage)
//         this.app.get("/api/users/:fuid/messages/:suid", this.viewAllMessagesBetweenUsers)
//
//     }
//
//     createAMessage = (req: Request, res: Response) =>
//         this.messageDao.createAMessage(req.params.sid,req.params.rid, req.body)
//             .then(messages => res.json(messages));
//
//     viewMessagesSent = (req: Request, res: Response) =>
//         this.messageDao.viewMessagesSent(req.params.uid)
//             .then(message => res.json(message))
//
//     viewMessagesReceived = (req: Request, res: Response) =>
//         this.messageDao.viewMessagesReceived(req.params.uid)
//             .then(message => res.json(message))
//
//     deleteMessage = (req: Request, res: Response) =>
//         this.messageDao.deleteMessage(req.params.mid)
//             .then(status => res.json(status))
//
//     updatesAMessage = async (req: Request, res: Response) =>
//             this.messageDao.updatesAMessage(req.params.mid,req.body)
//                 .then(status => res.json(status))
//
//     viewAllMessagesBetweenUsers = async (req: Request, res: Response) =>
//             this.messageDao.viewAllMessagesBetweenUsers(req.params.fuid,req.params.suid)
//                 .then(message => res.json(message))
//
// }
//

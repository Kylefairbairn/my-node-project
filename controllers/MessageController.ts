/**
 * @file Controller RESTful Web service API for likes resource
 */
import {Express, Request, Response} from "express";
import MessageControllerI from "../interfaces/MessageControllerI";
import MessagesDao from "../daos/MessagesDao";
import Message from "../models/Message";

/**
 * @class MessageController Implements RESTful Web service API for likes resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/likes to record a new message between two users
 *     </li>
 *     <li>GET /api/user/:uid/messages/sent to retrieve all messages sent
 *     </li>
 *     <li>DELETE /api/messages/:mid to record that user deletes message between another
 *     </li>
 *     <li>GET  //api/user/:uid/messages/received To retrieve all messages recieved
 *     </li>
 * </ul>
 * @property {MessagesDao} messageDao Singleton DAO implementing likes CRUD operations
 * @property {MessageController} messageController Singleton controller implementing
 * RESTful Web service API
 */

export default class MessageController implements MessageControllerI {
    private static messageDao: MessagesDao = MessagesDao.getInstance();
    private static messageController: MessageController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return MessageController
     */
    public static getInstance = (app: Express): MessageController => {
        if (MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.post("/api/users/:sid/messages/:rid", MessageController.messageController.sendAMessage);
            app.get("/api/user/:uid/messages/sent", MessageController.messageController.findAllMessagesSent)
            app.delete("/api/messages/:mid", MessageController.messageController.deleteAMessage)
            app.get("/api/user/:uid/messages/received", MessageController.messageController.findAllMessagesReceived)
        }
        return MessageController.messageController;
    }

    private constructor() {
    }


    /**
     * Retrieves information from two users to create a message
     * @param {Request} req Represents request from client, including the path
     * parameter sid the sender, rid the receiver representing two users
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    sendAMessage = (req: Request, res: Response) =>
        MessageController.messageDao.sendAMessage(req.params.sid, req.params.rid, req.body)
            .then((message: Message) => res.json(message))

    /**
     * Retrieves all messages that a user sent from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user who sent the messages
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessagesSent = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesSent(req.params.uid)
            .then((message: Message) => res.json(message))

    /**
     * Retrieves all messages from two users from the database
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user who received all the messages
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the user objects
     */
    findAllMessagesReceived = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessagesReceived(req.params.uid)
            .then((message: Message) => res.json(message))

    /**
     * Retrieves message from database
     * @param {Request} req Represents request from client, including the path
     * parameter mid representing the message
     * @param {Response} res Represents response to client, including the status of delete the message
     */
    deleteAMessage = (req: Request, res: Response) =>
        MessageController.messageDao.deleteAMessage(req.params.mid)
            .then((status) => res.json(status))

}

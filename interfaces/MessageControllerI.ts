import {Request, Response} from "express";

/**
 * @file Controller RESTful Web service API for Message resource
 */


export default interface MessageControllerI{
    sendAMessage(req: Request, res: Response): void;
    findAllMessagesSent(req: Request, res: Response): void;
    findAllMessagesReceived(req: Request, res: Response): void;
    deleteAMessage(req: Request, res: Response): void;

}
import {Request, Response} from "express";
import Message from "../models/Message";

export default interface MessageControllerI{
    sendAMessage(req: Request, res: Response): void;
    findAllMessagesSent(req: Request, res: Response): void;
    findAllMessagesReceived(req: Request, res: Response): void;
    deleteAMessage(req: Request, res: Response): void;
    findAllMessagesFromAUser(req: Request, res: Response): void;
    updateAMessage(req: Request, res: Response): void;
}
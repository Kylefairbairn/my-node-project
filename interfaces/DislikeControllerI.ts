import {Request, Response} from "express";

/**
 * @file Controller RESTful Web service API for likes resource
 */


export default interface DislikeControllerI {
    userUnDislikesTuit(req: Request, res: Response): void;
    findAllTuitsDislikedByUser (req: Request, res: Response): void;
    userDislikesTuit (req: Request, res: Response): void;
    userTogglesTuitDislikes(req: Request, res: Response): void;
};
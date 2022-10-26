import {Request, Response} from "express";


/**
 * @file Controller RESTful Web service API for tuit resource
 */


export default interface TuitControllerI {
    findAllTuits (req: Request, res: Response): void;
    findAllTuitsByUser (req: Request, res: Response): void;
    findTuitById (req: Request, res: Response): void;
    createTuitByUser (req: Request, res: Response): void;
    updateTuit (req: Request, res: Response): void;
    deleteTuit (req: Request, res: Response): void;
};

    // findAllTuits(req: Request, res: Response): void;
    // findTuitById(req: Request, res: Response): void;
    // findTuitsByUser(req: Request, res: Response): void;
    // createTuit(req: Request, res: Response): void;
    // updateTuit(req: Request, res: Response): void;
    // deleteTuit(req: Request, res: Response): void;


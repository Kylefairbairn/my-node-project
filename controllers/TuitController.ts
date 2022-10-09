import TuitControllerI from "../interfaces/TuitControllerI";
import {Express, Request, Response} from "express";
import TuitDao from "../daos/TuitDao";

export default class TuitController implements TuitControllerI {

    app: Express;
    tuitDao: TuitDao;
    constructor(app: Express, tuitDao: TuitDao) {
        this.app = app;
        this.tuitDao = tuitDao;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tid', this.findTuitById);
        this.app.get('/users/:uid/tuits', this.findTuitsByUser)
        this.app.post('/tuits', this.createTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit);
        this.app.put('/tuits/:tid', this.updateTuit);
    }
    findAllTuits= (req: Request, res: Response) =>
        this.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));
    findTuitById = (req: Request, res: Response) =>
        this.tuitDao.findTuitById(req.params.tid)
            .then(tuits => res.json(tuits));
    findTuitsByUser = (req: Request, res: Response) =>
        this.tuitDao.findTuitsByUser(req.params.user)
            .then(tuits => res.json(tuits));
    createTuit = (req: Request, res: Response) =>
        this.tuitDao.createTuit(req.body)
            .then(tuits => res.json(tuits));
    deleteTuit = (req: Request, res: Response) =>
        this.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));
    updateTuit = async (req: Request, res: Response) => {
        const tid = req.params['tid'];
        const newTuit = req.body;
        const count = await this.tuitDao.updateTuit(tid,newTuit);
        res.json(count);
    }

}
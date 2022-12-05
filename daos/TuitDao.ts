/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
 * to integrate with MongoDB
 */

import TuitDaoI from "../interfaces/TuitDaoI";
import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits
 * @property {TuitDao} tuitDao Private single instance of TuitDao
 */
export default class TuitDao implements TuitDaoI{
    private static tuitDao: TuitDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns TuitDao
     */

    public static getInstance = (): TuitDao => {
        if(TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}

    /**
     * Uses TuitModel to retrieve all tuits from tuit collection
     * @returns Promise To be notified when all tuits are retrieved from the
     * database
     */
    findAllTuits = async (): Promise<any> =>
        TuitModel.find().populate("postedBy").exec();

    /**
     * Uses TuitModel to retrieve all tuits by a user
     * @param {string} uid User's primary key
     * @returns Promise To be notified when a collection of tutis by a user are returned
     */
    findAllTuitsByUser = async (uid: string): Promise<any> =>
        TuitModel.find({postedBy: uid})
            .populate("postedBy")
            .exec();

    /**
     * Uses TuitModel to retrieve a tuit by an id
     * @returns Promise To be notified when a tuit is retrieved from the database
     * @param uid
     */
    findTuitById = async (uid: string): Promise<any> =>
        TuitModel.findById(uid)
            .populate("postedBy")
            .exec();

    /**
     * Inserts Tuit instance into the database
     * @param {string} uid Users Primary Key
     * @param {Tuit} tuit
     * @returns Promise To be notified when user is inserted into the database
     */
    createTuitByUser = async (uid: string, tuit: Tuit): Promise<any> =>
        TuitModel.create({...tuit, postedBy: uid});

    /**
     * Updates tuit with new values in database
     * @param {string} uid Primary key of user to be modified
     * @param {Tuit} tuit Tuit object containing properties and their new values
     * @returns Promise To be notified when tuit is updated in the database
     */
    updateTuit = async (uid: string, tuit: Tuit): Promise<any> =>
        TuitModel.updateOne(
            {_id: uid},
            {$set: tuit});
    /**
     * Removes tuit from the database.
     * @returns Promise To be notified when tuit is removed from the database
     * @param uid
     */
    deleteTuit = async (uid: string): Promise<any> =>
        TuitModel.deleteOne({_id: uid});

    updateLikes =
        async (tid: string, newStats: {}) =>
            TuitModel.updateOne(
                {_id: tid},
                {$set: {stats: newStats}});
}
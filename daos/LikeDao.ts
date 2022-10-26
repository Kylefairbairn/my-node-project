/**
 * @file Implements DAO managing data storage of likes. Uses mongoose LikeModel
 * to integrate with MongoDB
 */

import LikeDaoI from "../interfaces/LikeDaoI";
import LikeModel from "../mongoose/LikesModel";
import Like from "../models/Likes";

/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} likeDao Private single instance of LikeDao
 */

export default class LikeDao implements LikeDaoI {
    private static likeDao: LikeDao | null = null;
    /**
     * Creates singleton DAO instance
     * @returns LikeDao
     */

    public static getInstance = (): LikeDao => {
        if(LikeDao.likeDao === null) {
            LikeDao.likeDao = new LikeDao();
        }
        return LikeDao.likeDao;
    }

    private constructor() {}

    /**
     * Uses LikeModel to retrieve all information about like resources
     * @param {string} tid Like primary key
     * @returns Promise To be notified when Like is retrieved from the database
     */
    findAllUsersThatLikedTuit = async (tid: string): Promise<Like[]> =>
        LikeModel
            .find({tuit: tid})
            .populate("likedBy")
            .exec();
    /**
     * Uses LikeModel to retrieve all information about a like document from like collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when Like is retrieved from the database
     */
    findAllTuitsLikedByUser = async (uid: string): Promise<Like[]> =>
        LikeModel
            .find({likedBy: uid})
            .populate("tuit")
            .exec();
    /**
     * Inserts like instance into the database
     * @param {string} uid primary key of a user
     * @param {string} tid primaary key of a tuit
     * @returns Promise To be notified when like is inserted into the database
     */
    userLikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.create({tuit: tid, likedBy: uid});
    /**
     * Removes Like from the database.
     * @param {string} uid Primary key of user to be removed
     * @param {string} tid Primary key of tuit to be removed
     * @returns Promise To be notified when like is removed from the database
     */
    userUnlikesTuit = async (uid: string, tid: string): Promise<any> =>
        LikeModel.deleteOne({tuit: tid, likedBy: uid});
}
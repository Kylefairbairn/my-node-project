/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */

import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/FollowModel";


/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Users
 * @property {FollowDao} followDao Private single instance of UserDao
 */
export default class FollowDao implements FollowDaoI{
    private static followDao: FollowDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {}


    /**
     * Inserts follow instance into the database
     * @param {string} uid Instance of a user primary key
     * @param {string} suid Instance of a second users primary key
     * @returns Promise To be notified when follow is inserted into the database
     */
    createFollowing = async (uid:string, suid: string): Promise<any> =>
        FollowModel.create({userFollowing: uid, userBeingFollowed: suid})

    /**
     * Removes Follow from the database.
     * @param {string} fid Primary key of Follow to be removed
     * @returns Promise To be notified when Follow is removed from the database
     */
    unfollow = async (fid: string): Promise<any> =>
        FollowModel.deleteOne({_id:fid})

    /**
     * Uses FollowModel to retrieve all follow documents from follow collection
     * @returns Promise To be notified when the users following have return from
     * database
     */
    findWhoIAmFollowing = async (): Promise<any> =>
        FollowModel.find().populate("userBeingFollowed").exec()
    /**
     * Uses FollowModel to retrieve all follow documents from follow collection
     * @returns Promise To be notified when the users followers have return from
     * database
     */
    findMyFollowers = async (): Promise<any> =>
        FollowModel.find().populate("userFollowing").exec()

    /**
     * Uses UserModel to retrieve all follow document from follow collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when another users following have returned
     * from database
     */
    viewAnotherUsersFollowings = async (uid:string):Promise<any> =>
        FollowModel.find({userFollowing: uid}, {_id: 0, userFollowing: 0})
            .populate("userBeingFollowed").exec()

    /**
     * Uses UserModel to retrieve all follow document from follow collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when another users followers have returned
     * from database
     */
    viewAnotherUsersFollowers = async (uid:string):Promise<any> =>
        FollowModel.find({userBeingFollowed: uid}, {_id: 0, userBeingFollowed: 0})
            .populate("userFollowing").exec()

    }
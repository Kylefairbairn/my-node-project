/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FollowModel from "../mongoose/FollowModel";
/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Users
 * @property {FollowDao} followDao Private single instance of UserDao
 */
export default class FollowDao {
    constructor() {
        /**
         * Inserts follow instance into the database
         * @param {string} uid Instance of a user primary key
         * @param {string} suid Instance of a second users primary key
         * @returns Promise To be notified when follow is inserted into the database
         */
        this.createFollowing = (uid, suid) => __awaiter(this, void 0, void 0, function* () { return FollowModel.create({ userFollowing: uid, userBeingFollowed: suid }); });
        /**
         * Removes Follow from the database.
         * @param {string} fid Primary key of Follow to be removed
         * @returns Promise To be notified when Follow is removed from the database
         */
        this.unfollow = (fid) => __awaiter(this, void 0, void 0, function* () { return FollowModel.deleteOne({ _id: fid }); });
        /**
         * Uses FollowModel to retrieve all follow documents from follow collection
         * @returns Promise To be notified when the users following have return from
         * database
         */
        this.findWhoIAmFollowing = () => __awaiter(this, void 0, void 0, function* () { return FollowModel.find().populate("userBeingFollowed").exec(); });
        /**
         * Uses FollowModel to retrieve all follow documents from follow collection
         * @returns Promise To be notified when the users followers have return from
         * database
         */
        this.findMyFollowers = () => __awaiter(this, void 0, void 0, function* () { return FollowModel.find().populate("userFollowing").exec(); });
        /**
         * Uses UserModel to retrieve all follow document from follow collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when another users following have returned
         * from database
         */
        this.viewAnotherUsersFollowings = (uid) => __awaiter(this, void 0, void 0, function* () {
            return FollowModel.find({ userFollowing: uid }, { _id: 0, userFollowing: 0 })
                .populate("userBeingFollowed").exec();
        });
        /**
         * Uses UserModel to retrieve all follow document from follow collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when another users followers have returned
         * from database
         */
        this.viewAnotherUsersFollowers = (uid) => __awaiter(this, void 0, void 0, function* () {
            return FollowModel.find({ userBeingFollowed: uid }, { _id: 0, userBeingFollowed: 0 })
                .populate("userFollowing").exec();
        });
    }
}
FollowDao.followDao = null;
/**
 * Creates singleton DAO instance
 * @returns FollowDao
 */
FollowDao.getInstance = () => {
    if (FollowDao.followDao === null) {
        FollowDao.followDao = new FollowDao();
    }
    return FollowDao.followDao;
};

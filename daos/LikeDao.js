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
import LikeModel from "../mongoose/LikesModel";
/**
 * @class LikeDao Implements Data Access Object managing data storage
 * of likes
 * @property {LikeDao} likeDao Private single instance of UserDao
 */
export default class LikeDao {
    constructor() {
        /**
         * Uses LikeModel to retrieve all information about like resources
         * @param {string} tid Like primary key
         * @returns Promise To be notified when Like is retrieved from the database
         */
        this.findAllUsersThatLikedTuit = (tid) => __awaiter(this, void 0, void 0, function* () {
            return LikeModel
                .find({ tuit: tid })
                .populate("likedBy")
                .exec();
        });
        /**
         * Uses LikeModel to retrieve all information about a like document from like collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when Like is retrieved from the database
         */
        this.findAllTuitsLikedByUser = (uid) => __awaiter(this, void 0, void 0, function* () {
            return LikeModel
                .find({ likedBy: uid })
                .populate("tuit")
                .exec();
        });
        /**
         * Inserts like instance into the database
         * @param {string} uid primary key of a user
         * @param {string} tid primaary key of a tuit
         * @returns Promise To be notified when like is inserted into the database
         */
        this.userLikesTuit = (uid, tid) => __awaiter(this, void 0, void 0, function* () { return LikeModel.create({ tuit: tid, likedBy: uid }); });
        /**
         * Removes user from the database.
         * @param {string} uid Primary key of user to be removed
         * @param {string} tid Primary key of tuit to be removed
         * @returns Promise To be notified when bookmark is removed from the database
         */
        this.userUnlikesTuit = (uid, tid) => __awaiter(this, void 0, void 0, function* () { return LikeModel.deleteOne({ tuit: tid, likedBy: uid }); });
    }
}
LikeDao.likeDao = null;
/**
 * Creates singleton DAO instance
 * @returns LikeDao
 */
LikeDao.getInstance = () => {
    if (LikeDao.likeDao === null) {
        LikeDao.likeDao = new LikeDao();
    }
    return LikeDao.likeDao;
};

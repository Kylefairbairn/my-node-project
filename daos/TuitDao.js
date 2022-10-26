/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose TuitModel
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
import TuitModel from "../mongoose/TuitModel";
/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Users
 * @property {TuitDao} tuitDao Private single instance of UserDao
 */
export default class TuitDao {
    constructor() {
        /**
         * Uses TuitModel to retrieve all tuits from tuit collection
         * @returns Promise To be notified when all tuits are retrieved from the
         * database
         */
        this.findAllTuits = () => __awaiter(this, void 0, void 0, function* () {
            return TuitModel.find()
                .populate("postedBy")
                .exec();
        });
        /**
         * Uses TuitModel to retrieve all tuits by a user
         * @param {string} uid User's primary key
         * @returns Promise To be notified when a collection of tutis by a user are returned
         */
        this.findAllTuitsByUser = (uid) => __awaiter(this, void 0, void 0, function* () {
            return TuitModel.find({ postedBy: uid })
                .populate("postedBy")
                .exec();
        });
        /**
         * Uses TuitModel to retrieve a tuit by an id
         * @param {string} tid Tuit primary key
         * @returns Promise To be notified when a tuit is retrieved from the database
         */
        this.findTuitById = (uid) => __awaiter(this, void 0, void 0, function* () {
            return TuitModel.findById(uid)
                .populate("postedBy")
                .exec();
        });
        /**
         * Inserts Tuit instance into the database
         * @param {string} uid Users Primary Key
         * @param {Tuit} tuit
         * @returns Promise To be notified when user is inserted into the database
         */
        this.createTuitByUser = (uid, tuit) => __awaiter(this, void 0, void 0, function* () { return TuitModel.create(Object.assign(Object.assign({}, tuit), { postedBy: uid })); });
        /**
         * Updates tuit with new values in database
         * @param {string} uid Primary key of user to be modified
         * @param {Tuit} tuit Tuit object containing properties and their new values
         * @returns Promise To be notified when tuit is updated in the database
         */
        this.updateTuit = (uid, tuit) => __awaiter(this, void 0, void 0, function* () {
            return TuitModel.updateOne({ _id: uid }, { $set: tuit });
        });
        /**
         * Removes tuit from the database.
         * @param {string} tid Primary key of tid to be removed
         * @returns Promise To be notified when tuit is removed from the database
         */
        this.deleteTuit = (uid) => __awaiter(this, void 0, void 0, function* () { return TuitModel.deleteOne({ _id: uid }); });
    }
}
TuitDao.tuitDao = null;
/**
 * Creates singleton DAO instance
 * @returns TuitDao
 */
TuitDao.getInstance = () => {
    if (TuitDao.tuitDao === null) {
        TuitDao.tuitDao = new TuitDao();
    }
    return TuitDao.tuitDao;
};

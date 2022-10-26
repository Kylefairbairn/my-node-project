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
import BookmarkModel from "../mongoose/BookmarkModel";
import bookmarkModel from "../mongoose/BookmarkModel";
/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
 */
export default class BookmarkDao {
    constructor() {
        /**
         * Inserts bookmark instance into database
         * @param {string} uid User's primary key
         * @param {string} tid Tuit's primary key
         * @returns Promise To be notified when bookmark is inserted into the database
         */
        this.createABookmark = (tid, uid) => __awaiter(this, void 0, void 0, function* () { return BookmarkModel.create({ tuit: tid, author: uid }); });
        /**
         * Removes bookmark form the database
         * @param {string} bid Bookmarks primary key
         * @returns Promise To be notified when bookmark is removed from database
         */
        this.unBookmarks = (bid) => __awaiter(this, void 0, void 0, function* () { return BookmarkModel.deleteOne({ _id: bid }); });
        /**
         * Uses BookmarkModel to retrieve all bookmarks documents from bookmarks collection
         * @returns Promise To be notified when the bookmarks are retrieved from
         * database
         */
        this.findAllBookmarks = () => __awaiter(this, void 0, void 0, function* () { return BookmarkModel.find().populate("author").exec(); });
        /**
         * Uses BookmarkModel to retrieve all bookmarks of another user
         * document from bookmarks collection
         * @param {string} uid User's primary key
         * @returns Promise To be notified when the bookmarks are retrieved from the database
         */
        this.findBookmarksFromAnotherUser = (uid) => __awaiter(this, void 0, void 0, function* () { return bookmarkModel.find({ author: uid }).populate("author").exec(); });
    }
}
BookmarkDao.bookmarkDao = null;
/**
 * Creates singleton DAO instance
 * @returns BookmarkDao
 */
BookmarkDao.getInstance = () => {
    if (BookmarkDao.bookmarkDao === null) {
        BookmarkDao.bookmarkDao = new BookmarkDao();
    }
    return BookmarkDao.bookmarkDao;
};
//
// import Bookmark from "../models/Bookmark";
// import BookmarkModel from "../mongoose/BookmarkModel";
//
//
//
// export default class BookmarkDao {
//
//     public async createABookmark(bookmark:Bookmark): Promise<Bookmark> {
//
//         const bookmarkModel = await BookmarkModel.create(bookmark)
//
//         const tid = bookmarkModel.tuit?.toHexString()??''
//         const uid = bookmarkModel.author?.toString()??''
//         //toHexString()
//         return new Bookmark(tid, uid)
//
//     }
//
//    public async deleteABookmark(bid: string): Promise<any> {
//         return await BookmarkModel.deleteOne({id: bid});
//     }
//
//    public async findABookmark(bid: string): Promise<any> {
//
//         // if they are null
//        // promise should be a Bookmark
//
//       const bookmarkModel = await BookmarkModel.findById(bid)
//
//        const tid = bookmarkModel?.tuit?.toHexString() ?? ''
//        const uid = bookmarkModel?.author?.toString() ?? ''
//
//        return new Bookmark(tid, uid)
//
//        }
//
//    public async findAllBookmarks(): Promise<Bookmark[]> {
//
//         const allBookmarks = await BookmarkModel.find();
//
//         console.log(allBookmarks)
//
//         const bookmarkModel: Bookmark[] = allBookmarks.map((allBookmarks) => {
//             console.log(BookmarkModel, "model")
//             return new Bookmark(
//                 allBookmarks.tuit?.toHexString()?? '',
//                 allBookmarks.author?.toHexString()?? '')
//         });
//
//
//        return bookmarkModel;
//     }
//
//    public async findAllBookmarksByAUser(uid: string): Promise<Bookmark[]> {
//
//         const bookmarkByUser = await BookmarkModel.find({author:uid})
//
//         const bookmarks: Bookmark[] = bookmarkByUser.map((bookmarkByUser) => {
//             return new Bookmark(
//                 bookmarkByUser.tuit?.toHexString() ?? '',
//                 bookmarkByUser.author?.toHexString() ?? '')
//         })
//         return bookmarks
//     }
//
//
//
//
// }

/**
 * @file Implements DAO managing data storage of users. Uses mongoose UserModel
 * to integrate with MongoDB
 */


import BookmarkModel from "../mongoose/BookmarkModel";
import bookmarkModel from "../mongoose/BookmarkModel";
import BookmarkDaoI from "../interfaces/BookmarkDaoI";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
 */


export default class BookmarkDao implements BookmarkDaoI{
    private static bookmarkDao: BookmarkDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns BookmarkDao
     */
    public static getInstance = (): BookmarkDao => {
        if (BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }

    private constructor() {}

    /**
     * Inserts bookmark instance into database
     * @param {string} uid User's primary key
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when bookmark is inserted into the database
     */
    createABookmark = async (tid: string, uid: string): Promise<any> =>
        BookmarkModel.create({tuit:tid,author:uid})

    /**
     * Removes bookmark form the database
     * @param {string} bid Bookmarks primary key
     * @returns Promise To be notified when bookmark is removed from database
     */
    unBookmarks = async (bid: string): Promise<any> =>
        BookmarkModel.deleteOne({_id: bid})


    /**
     * Uses BookmarkModel to retrieve all bookmarks documents from bookmarks collection
     * @returns Promise To be notified when the bookmarks are retrieved from
     * database
     */
    findAllBookmarks = async (): Promise<any> =>
        BookmarkModel.find().populate("author").exec()

    /**
     * Uses BookmarkModel to retrieve all bookmarks of another user
     * document from bookmarks collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when the bookmarks are retrieved from the database
     */
    findBookmarksFromAnotherUser = async (uid: string): Promise<any> =>
        bookmarkModel.find({author:uid}).populate("author").exec()





}






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
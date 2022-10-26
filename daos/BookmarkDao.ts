/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose BookmarkModel
 * to integrate with MongoDB
 */


import BookmarkModel from "../mongoose/BookmarkModel";
import bookmarkModel from "../mongoose/BookmarkModel";
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";

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
    createABookmark = async (tid: string, uid: string): Promise<Bookmark> =>
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
    findAllBookmarks = async (): Promise<Bookmark[]> =>
        BookmarkModel.find().populate("author").exec()

    /**
     * Uses BookmarkModel to retrieve all bookmarks of another user
     * document from bookmarks collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when the bookmarks are retrieved from the database
     */
    findBookmarksFromAnotherUser = async (uid: string): Promise<Bookmark[]> =>
        bookmarkModel.find({author:uid}).populate("author").exec()

}


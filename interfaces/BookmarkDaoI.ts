import Bookmark from "../models/Bookmark";

/**
 * @file Declares API for Bookmark related data access object methods
 */

export default interface BookmarkDaoI{


    createABookmark(tid: string, uid: string): Promise<any>
    unBookmarks(bid: string): Promise<any>
    findAllBookmarks(): Promise<any>
    findBookmarksFromAnotherUser(uid: string): Promise<any>

    // // user and tuit
    // createABookmark(tid: string, uid: string): Promise<any>
    // deleteABookmark(bid: string): Promise<any>
    // findAllBookmarks(): Promise<Bookmark[]>
    // findABookmark(uid:string): Promise<Bookmark>
    // // populate the authors of all the tuits
    // findAllBookmarksByAUser(uid: string): Promise<Bookmark[]>
    // viewAnotherUsersBookmarks(uid: string): Promise<Bookmark[]>


}
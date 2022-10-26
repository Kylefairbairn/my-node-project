/**
 * @file Declares API for Bookmark related data access object methods
 */
import Bookmark from "../models/Bookmark";


export default interface BookmarkDaoI{

    createABookmark(tid: string, uid: string): Promise<Bookmark>
    unBookmarks(bid: string): Promise<any>
    findAllBookmarks(): Promise<Bookmark[]>
    findBookmarksFromAnotherUser(uid: string): Promise<Bookmark[]>
}
import Bookmark from "../models/Bookmark";

export default interface BookmarkDaoI{

    // user and tuit
    createABookmark(bookmark:Bookmark): Promise<Bookmark>
    deleteABookmark(bid: string): Promise<any>
    findAllBookmarks(uid: string): Promise<Bookmark[]>
    findABookmark(uid:string): Promise<Bookmark>
    // populate the authors of all the tuits
    findAllBookmarksByAUser(uid: string): Promise<Bookmark>


}
import {Request, Response} from "express";



/**
 * @file Controller RESTful Web service API for Bookmarks resource
 */


export default interface BookmarkControllerI {
    createABookmark(req: Request, res: Response): void;
    unBookmarks(req: Request, res: Response): void;
    findAllBookmarks(req: Request, res: Response): void;
    findBookmarksFromAnotherUser(req: Request, res: Response): void;
}
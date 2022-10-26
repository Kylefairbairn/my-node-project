/**
 * @file Controller RESTful Web service API for Bookmarks resource
 */

import {Express, Request, Response} from "express";
import BookmarkDao from "../daos/BookmarkDao";
import Bookmark from "../models/Bookmark";
import BookmarkControllerI from "../interfaces/BookmarkControllerI";

/**
 * @class TuitController Implements RESTful Web service API for likes resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/bookmarks/:tid to retrieve information about the tuit and user
 *     </li>
 *     <li>GET /api/bookmarks to retrieve all bookmarks
 *     </li>
 *     <li>DELETE /api/unbookmarks/:bid to retrieve bookmark to delete
 *     </li>
 *     <li>GET /api/users/:uid/bookmarks to retrieve another users bookmarks
 *     no londer likes a tuit</li>
 * </ul>
 * @property {BookmarkDao} bookmarkDao Singleton DAO implementing likes CRUD operations
 * @property {BookmarkController} BookmarkController Singleton controller implementing
 * RESTful Web service API
 */

export default class BookmarkController implements BookmarkControllerI {
    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return BookmarkController
     */
    public static getInstance = (app: Express): BookmarkController => {
        if (BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.post("/api/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.createABookmark);
            app.get("/api/bookmarks", BookmarkController.bookmarkController.findAllBookmarks)
            app.delete("/api/unbookmarks/:bid", BookmarkController.bookmarkController.unBookmarks)
            app.get("/api/users/:uid/bookmarks", BookmarkController.bookmarkController.findBookmarksFromAnotherUser)
        }
        return BookmarkController.bookmarkController;
    }

    private constructor() {}


        /**
         * Retrieves information pertaining to a user and a tuit
         * @param {Request} req Represents request from client, including the path
         * parameter tid representing the tuit and uid representing the user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the Bookmark objects
         */
        createABookmark = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.createABookmark(req.params.uid, req.params.tid)
            .then((bookmark: Bookmark) => res.json(bookmark))

        /**
         * Retrieves all bookmarks from the database
         * @param {Request} req Represents request from client, to populate
         * all bookmarks by a user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the bookmark objects
         */
        findAllBookmarks = (req: Request, res: Response) =>
            BookmarkController.bookmarkDao.findAllBookmarks()
                .then((bookmark:Bookmark[]) => res.json(bookmark))
        /**
         * Retrieves bookmarks to delete
         * @param {Request} req Represents request from client, including the path
         * parameter bid representing the bookmark
         * @param {Response} res Represents response to client, including the
         * status of whether the object has been deleted
         */
        unBookmarks = (req: Request, res: Response) =>
            BookmarkController.bookmarkDao.unBookmarks(req.params.bid)
                .then((status) => res.json(status))

        /**
         * Retrieves bookmarks from other user
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the bookmarks from another user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the bookmarks objects
         */
        findBookmarksFromAnotherUser = (req: Request, res: Response) =>
            BookmarkController.bookmarkDao.findBookmarksFromAnotherUser(req.params.uid)
                .then((bookmark:Bookmark[]) => res.json(bookmark))

}
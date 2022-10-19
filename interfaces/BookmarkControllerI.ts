import {Request, Response} from "express";
import Bookmark from "../models/Bookmark";

export default interface BookmarkControllerI{
    createABookmark(req: Request, res: Response): void;
    deleteABookmark(req: Request, res: Response): void;
    findAllBookmarks(req: Request, res: Response): void;
    findABookmark(req: Request, res: Response): void;
    findAllBookmarksByAUser(req: Request, res: Response): void;
}
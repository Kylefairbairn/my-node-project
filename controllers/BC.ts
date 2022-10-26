// import {Express, Request, Response} from "express";
// import BookmarkDao from "../daos/BookmarkDao";
// import BookmarkControllerI from "../interfaces/BookmarkControllerI";
//
// export default class BookmarkController {
//     app: Express;
//     bookMarkDao: BookmarkDao;
//     constructor(app: Express, bookMarkDao: BookmarkDao) {
//         this.app = app;
//         this.bookMarkDao = bookMarkDao;
//         this.app.post('/api/bookmarks', this.createABookmark);
//         this.app.delete('/api/bookmarks/:bid', this.deleteABookmark)
//         this.app.get('/api/bookmarks/:bid', this.findABookmark)
//         this.app.get('/api/bookmarks', this.findAllBookmarks)
//         this.app.get('/api/users/:uid/bookmarks', this.findAllBookmarksByAUser)
//         // viewAnotherUsersBookmarks
//     }
//
//     createABookmark = (req: Request, res: Response) =>
//         this.bookMarkDao.createABookmark(req.body)
//             .then(bookmarks => res.json(bookmarks));
//
//     deleteABookmark = (req: Request, res: Response) =>
//         this.bookMarkDao.deleteABookmark(req.params.bid)
//             .then(status => res.json(status));
//
//
//     findABookmark = (req: Request, res: Response) =>
//         this.bookMarkDao.findABookmark(req.params.bid)
//             .then(bookmarks => res.json(bookmarks));
//
//
//     findAllBookmarks = (req: Request, res: Response) =>
//         this.bookMarkDao.findAllBookmarks()
//             .then(bookmarks => res.json(bookmarks));
//
//
//     findAllBookmarksByAUser = (req: Request, res: Response) =>
//
//         this.bookMarkDao.findAllBookmarksByAUser(req.params.uid)
//             .then(bookmarks => res.json(bookmarks));
//
//     viewAnotherUsersBookmarks
// }

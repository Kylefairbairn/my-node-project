
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
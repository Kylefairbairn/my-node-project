import mongoose from "mongoose";
const BookmarkSchema = new mongoose.Schema({
    tuit: { type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
}, { collection: 'Bookmark' });
export default BookmarkSchema;

import mongoose from "mongoose";
import User from "../models/User";
import Tuit from "../models/Tuit";
import Bookmark from "../models/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    tuit: {type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel'},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'Bookmark'});


export default BookmarkSchema;
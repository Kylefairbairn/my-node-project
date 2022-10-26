/**
 * @file Implements mongoose model to CRUD
 * documents in the bookmark collection
 */
import mongoose from "mongoose";
import Bookmark from "../models/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    tuit: {type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel'},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'Bookmark'});


export default BookmarkSchema;
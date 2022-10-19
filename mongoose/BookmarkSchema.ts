import mongoose from "mongoose";
import User from "../models/User";
import Tuit from "../models/Tuit";

const BookmarkSchema = new mongoose.Schema({
    tuitBeingBookmarked: Tuit,
    author: User
}, {collection: 'Bookmark'});
export default BookmarkSchema;
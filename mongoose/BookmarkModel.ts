/**
 * @file Implements mongoose model to CRUD
 * documents in the bookmark collection
 */

import mongoose from "mongoose";
import BookmarkSchema from "./BookmarkSchema";

const BookmarkModel = mongoose.model("BookmarkSchema", BookmarkSchema);

export default BookmarkModel;
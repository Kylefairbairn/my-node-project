import mongoose from "mongoose";
import Like from "../models/Like";
import Replies from "../models/Replies";
import BookMark from "../models/BookMark";
import tuitToTag from "../models/tuitToTag";
import tuitToTopic from "../models/tuitToTopic";

const tuitSchema = new mongoose.Schema({
    tuit : String,
    id : String,
    numOfLikes : Number,
    numOfReplies : Number,
    likes : [Like],
    replies : [Replies],
    image : String,
    bookmark : BookMark,
    topic : tuitToTag,
    tag : tuitToTopic,
}, {collection : "tuits"});

export default tuitSchema;
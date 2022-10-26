import mongoose from "mongoose";
import User from "../models/User";

const MessageSchema = new mongoose.Schema({
    userSending: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    userReceiving: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    message: {type:String}
}, {collection: 'Message'});

export default MessageSchema;
/**
 * @file MessageSchema provides schema for database
 */

import mongoose from "mongoose";
import Message from "../models/Message";

const MessageSchema = new mongoose.Schema<Message>({
    userSending: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    userReceiving: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    message: {type:String}
}, {collection: 'Message'});

export default MessageSchema;
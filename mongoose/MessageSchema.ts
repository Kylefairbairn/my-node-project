import mongoose from "mongoose";
import User from "../models/User";

const MessageSchema = new mongoose.Schema({
    userSending: User,
    userReceiving: User,
    message: {type:String,required: true}
}, {collection: 'Message'});

export default MessageSchema;
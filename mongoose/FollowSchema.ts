/**
 * @file FollowSchema provides schema for database
 */
import mongoose from "mongoose";
import Follows from "../models/Follows";

const FollowSchema = new mongoose.Schema<Follows>({
    userFollowing: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'} ,
    userBeingFollowed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'Follow'});
export default FollowSchema;
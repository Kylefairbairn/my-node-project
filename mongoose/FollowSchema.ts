import mongoose from "mongoose";
import User from "../models/User";

const FollowSchema = new mongoose.Schema({
    userFollowing: User,
    userBeingFollowed: User
}, {collection: 'Follow'});
export default FollowSchema;
import mongoose from "mongoose";
const FollowSchema = new mongoose.Schema({
    userFollowing: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', require: true },
    userBeingFollowed: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', require: true }
}, { collection: 'Follow' });
export default FollowSchema;

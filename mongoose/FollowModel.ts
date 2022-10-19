import mongoose from "mongoose";
import FollowSchema from "./FollowSchema";


const followSchema = mongoose.model("FollowSchema", FollowSchema);

export default followSchema;
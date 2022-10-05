import mongoose from "mongoose";
import Tuit from "./TuitModel";
import User from "../models/User";

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn:{ type: Date, default: Date.now},
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: "tuits"});

export default TuitSchema;
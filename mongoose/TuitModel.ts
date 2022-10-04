import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const tuitModel = mongoose.model('UserModel', TuitSchema);

export default tuitModel;
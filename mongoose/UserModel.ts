import mongoose from "mongoose";
import UserSchema from "./UserSchema";


const userModel = mongoose.model('UserModel', UserSchema);

export default userModel;
import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";
const TuitModel = mongoose.model('TuitModel', TuitSchema);
export default TuitModel;


/*
import User from "../models/User";
import UserSchema from "./UserSchema";
import Tuit from "../models/Tuit";

// const TuitModel = mongoose.model('UserModel', TuitSchema);
//
// export default TuitModel;


export default model<Tuit>("TuitModel",TuitSchema);

 */
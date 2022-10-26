import User from "./User";
import {Stats} from "fs";


export default interface Tuit {
   tuit: string,
   postedBy: User,
   postedOn?: Date,
   image?: String,
   youtube?: String,
   avatarLogo?: String,
   imageOverlay?: String,
   stats: Stats
};
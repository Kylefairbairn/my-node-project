/**
 * @file Implements bookmark
 */

import Tuit from "./Tuit";
import User from "./User";

export default interface Bookmark{
    tuit: Tuit,
    author: User
}

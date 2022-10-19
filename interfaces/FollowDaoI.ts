
import Follow from "../models/Follows";
import User from "../models/User";

export default interface followDaoI{
    createFollow(follow: Follow): Promise<Follow>
    deleteFollow(fid: string): Promise<any>
    getAllUsersFollowing(uid: string): Promise<User[]>
    getAllFollowers(uid: string): Promise<User[]>
    getAFollower(uid: string): Promise<User>
    getAUserFollowing(uid:string): Promise<User>

}
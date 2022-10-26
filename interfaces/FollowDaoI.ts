/**
 * @file Declares API for Follow related data access object methods
 */
import Follows from "../models/Follows";


export default interface FollowDaoI{
    createFollowing(uid:string,suid:string): Promise<Follows>
    unfollow(fid: string): Promise<any>
    findWhoIAmFollowing(): Promise<Follows[]>
    findMyFollowers(): Promise<Follows[]>
    viewAnotherUsersFollowings(uid:string): Promise<Follows[]>
    viewAnotherUsersFollowings(uid: string): Promise<Follows[]>

}

/**
 * @file Declares API for Follow related data access object methods
 */

export default interface FollowDaoI{
    createFollowing(uid:string,suid:string): Promise<any>
    unfollow(fid: string): Promise<any>
    findWhoIAmFollowing(): Promise<any>
    findMyFollowers(): Promise<any>
    viewAnotherUsersFollowings(uid:string): Promise<any>
    viewAnotherUsersFollowings(uid: string): Promise<any>

}
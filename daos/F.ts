// import Follow from "../models/Follows";
// import FollowModel from "../mongoose/FollowModel";
// import followDaoI from "../interfaces/FollowDaoI";
//
//
//
// export default class FollowDao implements followDaoI{
//
//     public async createFollowing(uid:string,suid:string): Promise<Follow>{
//
//         const followModel = await FollowModel.create(
//             {userFollowing: uid, userBeingFollowed: suid})
//
//         return new Follow(
//             followModel?._id.toString(),
//             uid,
//             suid
//         )
//     }
//
//     public async unfollow(fid: string): Promise<any>{
//         return await FollowModel.deleteOne({_id: fid})
//     }
//
//     public async findWhoIAmFollowing(): Promise<any> {
//
//         const findAllFollowers = await FollowModel.find().populate("userBeingFollowed").exec()
//
//         return findAllFollowers
//     }
//
//     // as of now it is alllowing a person a follow another person more than once
//     public async findMyFollowers(): Promise<any>{
//
//         const findMyFollowing = await FollowModel.find().populate("userFollowing").exec()
//
//         return findMyFollowing
//     }
//
//     public async viewAnotherUsersFollowings(uid: string): Promise<any>{
//         const findSomeonesFollowings = await FollowModel.find({userFollowing: uid},
//             {_id:0, userFollowing: 0}).populate("userBeingFollowed").exec()
//
//         return findSomeonesFollowings
//
//     }
//
//     public async viewAnotherUsersFollowers(uid: string): Promise<any>{
//         const findsSomeonesFollowers = await FollowModel.find({userBeingFollowed: uid},
//             {_id:0, userBeingFollowed: 0}).populate("userFollowing").exec()
//
//         return findsSomeonesFollowers
//     }
//
//
// }
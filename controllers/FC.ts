// import {Express, Request, Response} from "express";
// import FollowDao from "../daos/FollowDao";
// import FollowControllerI from "../interfaces/FollowControllerI";
//
// export default class FollowController implements FollowControllerI{
//
//     app: Express;
//     followDao : FollowDao;
//     constructor(app: Express, followDao: FollowDao) {
//         this.app = app;
//         this.followDao = followDao;
//         this.app.post("/api/users/:uid/follows/:suid", this.createFollowing)
//         this.app.delete("/api/unfollows/:fid", this.unfollow)
//         this.app.get("/api/users/:uid/following/listimport {Express, Request, Response} from "express";
// // import FollowDao from "../daos/FollowDao";
// // import FollowControllerI from "../interfaces/FollowControllerI";
// //
// // export default class FollowController implements FollowControllerI{
// //
// //     app: Express;
// //     followDao : FollowDao;
// //     constructor(app: Express, followDao: FollowDao) {
// //         this.app = app;
// //         this.followDao = followDao;
// //         this.app.post("/api/users/:uid/follows/:suid", this.createFollowing)
// //         this.app.delete("/api/unfollows/:fid", this.unfollow)
// //         this.app.get("/api/users/:uid/following/list", this.findWhoIAmFollowing)
// //         this.app.get('/api/users/:uid/followers/list', this.findMyFollowers)
// //         this.app.get("/api/users/:uid/views/:uid/followers", this.viewAnotherUsersFollowings)
// //         this.app.get("/api/users/:uid/views/:uid/following", this.viewAnotherUsersFollowers)
// //
// //     }
// //
// //     createFollowing = (req: Request, res: Response) =>
// //         this.followDao.createFollowing(req.params.uid, req.params.suid)
// //             .then(follow => res.json(follow))
// //
// //     unfollow = (req: Request, res: Response) =>
// //         this.followDao.unfollow(req.params.fid)
// //             .then(status => res.json(status))
// //
// //     findWhoIAmFollowing = (req: Request, res: Response) =>
// //         this.followDao.findWhoIAmFollowing()
// //             .then(user => res.json(user))
// //
// //     findMyFollowers = (req: Request, res: Response) =>
// //         this.followDao.findMyFollowers()
// //             .then(user => res.json(user))
// //
// //
// //     viewAnotherUsersFollowings = (req: Request, res: Response) =>
// //         this.followDao.viewAnotherUsersFollowings(req.params.uid)
// //             .then(users => res.json(users))
// //
// //     viewAnotherUsersFollowers = (req: Request, res: Response) =>
// //         this.followDao.viewAnotherUsersFollowers(req.params.uid)
// //             .then(users => res.json(users))
// // }", this.findWhoIAmFollowing)
//         this.app.get('/api/users/:uid/followers/list', this.findMyFollowers)
//         this.app.get("/api/users/:uid/views/:uid/followers", this.viewAnotherUsersFollowings)
//         this.app.get("/api/users/:uid/views/:uid/following", this.viewAnotherUsersFollowers)
//
//     }
//
//     createFollowing = (req: Request, res: Response) =>
//         this.followDao.createFollowing(req.params.uid, req.params.suid)
//             .then(follow => res.json(follow))
//
//     unfollow = (req: Request, res: Response) =>
//         this.followDao.unfollow(req.params.fid)
//             .then(status => res.json(status))
//
//     findWhoIAmFollowing = (req: Request, res: Response) =>
//         this.followDao.findWhoIAmFollowing()
//             .then(user => res.json(user))
//
//     findMyFollowers = (req: Request, res: Response) =>
//         this.followDao.findMyFollowers()
//             .then(user => res.json(user))
//
//
//     viewAnotherUsersFollowings = (req: Request, res: Response) =>
//         this.followDao.viewAnotherUsersFollowings(req.params.uid)
//             .then(users => res.json(users))
//
//     viewAnotherUsersFollowers = (req: Request, res: Response) =>
//         this.followDao.viewAnotherUsersFollowers(req.params.uid)
//             .then(users => res.json(users))
// }
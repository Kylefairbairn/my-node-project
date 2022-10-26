/**
 * @file Controller RESTful Web service API for follows resource
 */
import FollowDao from "../daos/FollowDao";
/**
 * @class FollowController Implements RESTful Web service API for likes resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid/follows/:suid to record that a user has followed a user
 *     </li>
 *     <li>DELETE /api/unfollows/:fid to record that a user no longer follows a user
 *     </li>
 *     <li>GET /api/users/:uid/following/list to retrieve all the users a user is following
 *     </li>
 *     <li>GET /api/users/:uid/followers/list to retrieve all the users that are following a user
 *     </li>
 *     <li>GET /api/users/:uid/views/:uid/followers to retrieve another users followers
 *     </li>
 *     <li>GET /api/users/:uid/views/:uid/following to retrieve another users list that they are following
 *     </li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing follow CRUD operations
 * @property {FollowController} followController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController {
    constructor() {
        /**
         * Retrieves all users that are following another user from the database
         * @param {Request} req Represents request from client, including the path
         * parameter uid representing the user following another user suid
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the user objects
         */
        this.createFollowing = (req, res) => FollowController.followDao.createFollowing(req.params.uid, req.params.suid)
            .then((follow) => res.json(follow));
        /**
         * Deletes the mapping association between two users
         * @param {Request} req Represents request from client, including the
         * path parameters fid representing the follow object between two users
         * @param {Response} res Represents response to client, including the status
         * of the follow state after the operation has completed
         */
        this.unfollow = (req, res) => FollowController.followDao.unfollow(req.params.fid)
            .then((status) => res.json(status));
        /**
         * Retrieves a list of all users a single user is following
         * @param {Request} req Represents request from client, to populate all instances where a
         * user is following another user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the users that are being followed
         */
        this.findWhoIAmFollowing = (req, res) => FollowController.followDao.findWhoIAmFollowing()
            .then((follow) => res.json(follow));
        /**
         * Retrieves a list of all users that are following a user
         * @param {Request} req Represents request from client, to populate all users that are
         * following a user
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the users that are following
         */
        this.findMyFollowers = (req, res) => FollowController.followDao.findMyFollowers()
            .then((follow) => res.json(follow));
        /**
         * Retrieves a list of followers of another users (not theirs)
         * @param {Request} req Represents request from client, including the path parameter uid
         * representing the user who another user wants to view their following
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the users that are being followed
         */
        this.viewAnotherUsersFollowings = (req, res) => FollowController.followDao.viewAnotherUsersFollowings(req.params.uid)
            .then((follow) => res.json(follow));
        /**
         * Retrieves a list another users followers (not theirs)
         * @param {Request} req Represents request from client, including the path parameter uid
         * representing the user who another user wants to view their followers
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the users followers
         */
        this.viewAnotherUsersFollowers = (req, res) => FollowController.followDao.viewAnotherUsersFollowers(req.params.uid)
            .then((follow) => res.json(follow));
    }
}
FollowController.followDao = FollowDao.getInstance();
FollowController.followController = null;
/**
 * Creates singleton controller instance
 * @param {Express} app Express instance to declare the RESTful Web service
 * API
 * @return FollowController
 */
FollowController.getInstance = (app) => {
    if (FollowController.followController === null) {
        FollowController.followController = new FollowController();
        app.post("/api/users/:uid/follows/:suid", FollowController.followController.createFollowing);
        app.delete("/api/unfollows/:fid", FollowController.followController.unfollow);
        app.get("/api/users/:uid/following/list", FollowController.followController.findWhoIAmFollowing);
        app.get("/api/users/:uid/followers/list", FollowController.followController.findMyFollowers);
        app.get("/api/users/:uid/views/:uid/followers", FollowController.followController.viewAnotherUsersFollowings);
        app.get("/api/users/:uid/views/:uid/following", FollowController.followController.viewAnotherUsersFollowers);
    }
    return FollowController.followController;
};

import {Request, Response} from "express";

/**
 * @file Controller RESTful Web service API for Follow resource
 */


export default interface FollowControllerI{
    createFollowing(req: Request, res: Response): void;
    unfollow(req: Request, res: Response): void;
    findWhoIAmFollowing(req: Request, res: Response): void;
    findMyFollowers(req: Request, res: Response): void;
    viewAnotherUsersFollowings(req: Request, res: Response): void;
    viewAnotherUsersFollowers(req: Request, res: Response): void;
}
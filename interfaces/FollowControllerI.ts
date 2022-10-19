import {Request, Response} from "express";

export default interface FollowControllerI{
    createFollow(req: Request, res: Response): void;
    deleteFollow(req: Request, res: Response): void;
    getAllUsersFollowing(req: Request, res: Response): void;
    getAllFollowers(req: Request, res: Response): void;
    getAFollower(req: Request, res: Response): void;
    getAUserFollowing(req: Request, res: Response): void;
}
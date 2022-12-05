/**
 * @file Declares API for Dislikes related data access object methods
 */


export default interface DislikeDaoI {
    findAllTuitsDislikedByUser(uid: string): Promise<any>;

    userDislikesTuit(uid: string, tid: string): Promise<any>;

    userUnDislikesTuit(uid: string, tid: string): Promise<any>;

    findUserDislikesTuit(uid: string, tid: string): Promise<any>

    countHowManyDislikedTuit(tid: string): Promise<any>
};
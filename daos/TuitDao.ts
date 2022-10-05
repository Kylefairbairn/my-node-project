import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";
import User from "../models/User";
import UserModel from "../mongoose/UserModel";



export default class TuitDao implements TuitDaoI {


    async findAllTuits(): Promise<Tuit[]> {
        // find all tuits
        //const allTuits = await TuitModel.find();
        // find all users by id
        const allTuits = await TuitModel.find().populate('postedBy').exec();
        // create an individual user
        //const users = await UserModel.findById(author);


        // const persons = new User(
        //     users?.userName??'',
        //     users?.password??'',
        //     users?.firstName??'',
        //     users?.lastName??'',
        //     users?.email??'');


        // const user = new User(
        //     allTuits.postedBy.userName,
        //     allUsers.postedBy.password,
        //     allUsers.postedBy.firstName,
        //     allUsers.postedBy.lastName,
        //     allUsers.postedBy.email
        // );

        // let person: User =  new User(
        //     users?.userName??'',
        //     users?.password??'',
        //     users?.firstName??'',
        //     users?.lastName??'',
        //     users?.email??'');

        const ewq = allTuits.map(tuitObj =>
        {
            const u: any = JSON.parse(JSON.stringify(tuitObj.postedBy));
            const user = new User(
                u.userName,
                u.password,
                u.firstName,
                u.lastName,
                u.email
            );

            return new Tuit(
                tuitObj.tuit,
                tuitObj.postedOn,
                user)
        })
        return ewq;
    }
    async findTuitsByUser(uid: string): Promise<Tuit[]> {
        // find the user
        // create the user
        // find all tuits by the user
        const UserObj = await UserModel.findById(uid); // find a user
        let user: User = new User(
                        UserObj?.userName??'',
                        UserObj?.password??'',
                        UserObj?.firstName??'',
                        UserObj?.lastName??'',
                            UserObj?.email??'');

        const allTuits = await TuitModel.find();

        return allTuits.map(TuitModel =>
            new Tuit(
                    TuitModel.tuit,
                    TuitModel.postedOn,
                    user));
    }
    async findTuitById(tid: string): Promise<any> {
        try {
            const tuitObject = await TuitModel.findById(tid);
            return new Tuit(
                            tuitObject?.tuit??"",
                            tuitObject?.postedOn??(new Date),
                            null);
        } catch (e) {
            return "No such tuit exists";
        }
        //return await TuitModel.findById(tid);
    }
        //return await TuitModel.create(tid);

    async createTuit(tuit: Tuit): Promise<Tuit> {
        const newTuit = await TuitModel.create(tuit);
        // user would probably have to be a new user so instantiate it
        return new Tuit(
                        newTuit.tuit,
                        newTuit.postedOn,
                        null
        );
    }
    async updateTuit(tid: string, tuit: Tuit): Promise<any>{
        const updateTuit = await TuitModel.updateOne(
                {_id: tid},
                {$set: tuit})

            return updateTuit.upsertedCount;

    }
    async deleteTuit(tid: string): Promise<any>{
        const result = await TuitModel.deleteOne( {id: tid});
        return result.deletedCount;
    }
}
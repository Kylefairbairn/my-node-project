import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";
import User from "../models/User";
import UserModel from "../mongoose/UserModel";



export default class TuitDao implements TuitDaoI {


    async findAllTuits(): Promise<Tuit[]> {

        const findTuitByUser = await TuitModel.find().populate('postedBy').exec();


        const allTuits = findTuitByUser.map(tuitObj =>
        {
            const currentUser: any = JSON.parse(JSON.stringify(tuitObj.postedBy));
            const user = new User(
                currentUser.userName,
                currentUser.password,
                currentUser.firstName,
                currentUser.lastName,
                currentUser.email
            );

            return new Tuit(
                tuitObj.tuit,
                tuitObj.postedOn,
                user)
        })
        return allTuits;
    }
    async findTuitsByUser(uid: string): Promise<Tuit[]> {

        const UserObj = await UserModel.findById(uid);
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
    }


    async createTuit(tuit: Tuit): Promise<Tuit> {
        const newTuit = await TuitModel.create(tuit);

        return new Tuit(
                        newTuit.tuit,
                        newTuit.postedOn,
                        null
        );
    }
    async updateTuit(tid: string, tuit: Tuit): Promise<any>{

            return TuitModel.updateOne({_id: tid}, {$set: tuit});

    }
    async deleteTuit(tid: string): Promise<any>{
        const result = await TuitModel.deleteOne( {id: tid});
        return result.deletedCount;
    }
}
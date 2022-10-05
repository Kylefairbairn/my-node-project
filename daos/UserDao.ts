import User from "../models/User";
import UserModel from "../mongoose/UserModel";
import UserDaoI from "../interfaces/UserDao";


export default class UserDao implements UserDaoI {
    async findAllUsers(): Promise<User[]> {
        const findAllUserModels = await UserModel.find();
        return findAllUserModels.map(userObj =>
            new User(
                userObj.userName,
                userObj.password,
                userObj?.firstName??'',
                userObj?.lastName??'',
                userObj?.email??'')
        )

    }
    async findUserById(uid: string): Promise<any> {
        const userObject = await UserModel.findById(uid);
        return new User(
                            userObject?.userName??'',
                            userObject?.password??'',
                            userObject?.firstName??'',
                            userObject?.lastName??'',
                                    userObject?.email??'');
    }
    async createUser(user: User): Promise<User> {
        const newUser = await UserModel.create(user);
        return new User(
                            newUser.userName,
                            newUser.password,
            newUser?.firstName??'',
            newUser?.lastName??'',
            newUser?.email??'');

        //return UserModel.create(user);
    }
    async deleteUser(uid: string):  Promise<any> {
        const result = await UserModel.deleteOne({_id:uid});
        return result.deletedCount;

    }
    async updateUser(uid: string, user: User): Promise<any> {
        return UserModel.updateOne({_id: uid}, {$set: user});
    }
}


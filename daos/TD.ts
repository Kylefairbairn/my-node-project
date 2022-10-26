// import TuitDaoI from "../interfaces/TuitDaoI";
// import Tuit from "../models/Tuit";
// import tuitModel from "../mongoose/TuitModel";
// import User from "../models/User";
// import TuitModel from "../mongoose/TuitModel";
//
//
// export default class TuitDao implements TuitDaoI {
//
//     public async findTuitById(id: string):
//         Promise<Tuit> {
//         const tuitMongooseModel: any = await tuitModel
//             .findById(id)
//             .populate('postedBy').exec();
//         const author = new User(
//             tuitMongooseModel.postedBy?._id??'',
//             tuitMongooseModel.postedBy?.username??'',
//             tuitMongooseModel.postedBy?.password??''
//         );
//         const tuit = new Tuit(
//             tuitMongooseModel?._id.toString() ?? '',
//             tuitMongooseModel?.tuit ?? '',
//             new Date(tuitMongooseModel?.postedOn ?? (new Date())))
//         tuit.postedBy = author;
//         return tuit;
//     }
//     public async findAllTuits(): Promise<Tuit[]> {
//         const tuitMongooseModels =
//             await tuitModel.find();
//         const tuitModels = tuitMongooseModels
//             .map((tuitMongooseModel) => {
//                 return new Tuit(
//                     tuitMongooseModel?._id.toString() ?? '',
//                     tuitMongooseModel?.tuit ?? '',
//                     new Date(tuitMongooseModel?.postedOn ?? (new Date())))
//             });
//         return tuitModels;
//     }
//     public async findTuitsByAuthor(authorId: string):
//         Promise<Tuit[]> {
//         const tuitMongooseModels = await tuitModel
//             .find({postedBy: authorId});
//         const tuitModels = tuitMongooseModels
//             .map((tuitMongooseModel) => {
//                 return new Tuit(
//                     tuitMongooseModel?._id.toString() ?? '',
//                     tuitMongooseModel?.tuit ?? '',
//                     new Date(tuitMongooseModel?.postedOn ?? (new Date())))
//             });
//         return tuitModels;
//     }
//     public async createTuit(tuit: Tuit): Promise<Tuit> {
//         const tuitMongooseModel = await tuitModel.create(tuit);
//         return new Tuit(
//             tuitMongooseModel?._id.toString() ?? '',
//             tuitMongooseModel.tuit,
//             new Date(tuitMongooseModel?.postedOn ?? (new Date()))
//         )
//     }
//     public async deleteTuit(tuitId: string): Promise<any> {
//         return await tuitModel.deleteOne({_id: tuitId});
//     }
//     public async updateTuit(tuitId: string, tuit: Tuit): Promise<any> {
//
//         return tuitModel.updateOne(
//             {_id: tuitId}, {$set:tuit})
//
//     }
//
// }
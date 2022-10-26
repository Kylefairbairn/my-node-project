// import User from "./User";
//
//
// export default class Tuit {
//     private _id: string;
//     private _tuit: string;
//     private _postedOn: Date;
//     private _postedBy: User | null;
//
//     constructor(id: string, tuit: string, postedOn: Date) {
//         this._id = id;
//         this._tuit = tuit;
//         this._postedOn = postedOn;
//         this._postedBy = null;
//     }
//
//
//     get id(): string {
//         return this._id;
//     }
//
//     set id(value: string) {
//         this._id = value;
//     }
//
//     get tuit(): string {
//         return this._tuit;
//     }
//
//     set tuit(value: string) {
//         this._tuit = value;
//     }
//
//     get postedOn(): Date {
//         return this._postedOn;
//     }
//
//     set postedOn(value: Date) {
//         this._postedOn = value;
//     }
//
//     get postedBy(): User | null {
//         return this._postedBy;
//     }
//
//     set postedBy(value: User | null) {
//         this._postedBy = value;
//     }
// }
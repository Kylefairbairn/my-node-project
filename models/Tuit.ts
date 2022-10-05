
import User from "./User";

export default class Tuit {

   private _tuit: string = "";
   private _postedOn: Date = new Date();
   private _postedBy: User | null;

   // new Date().toString();

   constructor(tuit: string, postedOn: Date, postedBy: User | null) {
      this._tuit = tuit;
      this._postedOn = postedOn;
      this._postedBy = postedBy || null;
   }

   public get tuit(): string {
      return this.tuit;
   }

   public set tuit(value: string) {
      this.tuit = value;
   }

   public get postedOn(): Date {
      return this.postedOn;
   }

   public set postedBy(value: User | null) {
      this.postedBy = value;
   }

   public get postedBy(): User | null{
      return this.postedBy;
   }




}
import Tuit from "./Tuit";
import User from "./User";


export default class Bookmark{
    private tuit: Tuit | null;
    private Bookmaker: User;

    constructor(tuitBeingBookmarked: Tuit, author: User) {
        this.tuit = tuitBeingBookmarked;
        this.Bookmaker = author;
    }

    public getTuit(){
        return this.tuit;
    }

    public getBookmarker(){
        return this.Bookmaker;
    }

}
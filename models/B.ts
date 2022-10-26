import Tuit from "./Tuit";
import User from "./User";


export default class Bookmark{
    private tuit: string;
    private author: string;

    constructor(tuit: string, author: string) {
        //this.id = "";
        this.tuit = tuit;
        this.author = author;
    }

    public getTuit(){
        return this.tuit;
    }

    public getBookmarker(){
        return this.author;
    }

}
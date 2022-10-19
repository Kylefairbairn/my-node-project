import User from "./User";

export default class Message {

    private sender: User | null;
    private receiver: User | null;
    private message: string;

    constructor(userSending: User, userReceiving: User, message:string) {
        this.sender = userSending;
        this.receiver = userReceiving;
        this.message = message;
    }

    public getSender(){
        return this.sender;
    }

    public getReceiver(){
        return this.receiver;
    }

    public getMessage(){
        return this.message;
    }

    public setMessage(message: string){
        this.message = message;
    }
}
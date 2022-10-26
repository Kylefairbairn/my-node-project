import User from "./User";

export default interface Message{
    userSending: User,
    userRecieving: User,
    message: string
}
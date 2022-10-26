import User from "./User";

export default interface Follows{
    userFollowing:User,
    userBeingFollowed: User
}

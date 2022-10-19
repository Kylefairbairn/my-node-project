import User from "./User";


export default class Follow{
    private userFollowing: User | null;
    private userBeingFollowed: User | null;

    constructor(userFollowingAnother: User, userGettingFollowed: User) {
        this.userFollowing = userFollowingAnother;
        this.userBeingFollowed = userGettingFollowed
    }

    public getUserFollowing(){
        return this.userFollowing;
    }
    public getUserBeingFollowed(){
        return this.userBeingFollowed;
    }

}
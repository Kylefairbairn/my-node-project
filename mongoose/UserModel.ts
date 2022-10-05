import mongoose from "mongoose";
import UserSchema from "./UserSchema";
const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;

// this fixed the create error inside User DAO

//https://stackoverflow.com/questions/53021514/usermodel-is-not-assignable-to-parameter-of-type-document-nulll-mongoose-with


// this is stating to do a .then because the await blocks current scope and .then adds a new scope
// https://stackoverflow.com/questions/47682400/return-a-promise-without-waiting-for-a-dependant-promise-in-function-in-nodejs

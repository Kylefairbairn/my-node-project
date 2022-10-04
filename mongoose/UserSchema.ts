import mongoose from "mongoose";
import AccountType from "../models/AccountType";
import MaritalStatus from "../models/MaritalStatus";
import Location from "../models/Location";

const userSchema = new mongoose.Schema({
    username : String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: AccountType,
    maritalStatus: MaritalStatus,
    biography: String,
    dateOfBirth: Date,
    joined: Date,
    location: Location
}, {collection : "users"});

export default userSchema;
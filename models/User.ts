import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";

export default class User {


    private _userName : string = '';
    private _password: string = '';
    private _firstName: string | null = null;
    private _lastName: string | null = null;
    private _email: string = '';
    private _profilePhoto: string | null = "";
    private _headerImage: string | null = "";
    private _accountType: AccountType = AccountType.Personal;
    private _maritalStatus: MaritalStatus = MaritalStatus.Single;
    private _biography: string | null = null;
    private _dateOfBirth: Date | null = null;
    private _joined: Date = new Date();
    private _location: Location | null = null;

    constructor(userName: string, password: string, firstName: string, lastName: string, email: string) {
        this._userName = userName;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    get userName(): string {
        return this.userName;
    }

    set userName(value: string) {
        this.userName = value;
    }

    get password(): string {
        return this.password;
    }

    set password(value: string) {
        this.password = value;
    }

    get firstName(): string | null {
        return this.firstName;
    }

    set firstName(value: string | null) {
        this.firstName = value;
    }

    get lastName(): string | null {
        return this.lastName;
    }

    set lastName(value: string | null) {
        this.lastName = value;
    }

    get email(): string {
        return this.email;
    }

    set email(value: string) {
        this.email = value;
    }

    get profilePhoto(): string | null {
        return this.profilePhoto;
    }

    set profilePhoto(value: string | null) {
        this.profilePhoto = value;
    }

    get headerImage(): string | null {
        return this.headerImage;
    }

    set headerImage(value: string | null) {
        this.headerImage = value;
    }

    get accountType(): AccountType {
        return this.accountType;
    }

    set accountType(value: AccountType) {
        this.accountType = value;
    }

    get maritalStatus(): MaritalStatus {
        return this.maritalStatus;
    }

    set maritalStatus(value: MaritalStatus) {
        this.maritalStatus = value;
    }

    get biography(): string | null {
        return this.biography;
    }

    set biography(value: string | null) {
        this.biography = value;
    }

    get dateOfBirth(): Date | null {
        return this.dateOfBirth;
    }

    set dateOfBirth(value: Date | null) {
        this.dateOfBirth = value;
    }

    get joined(): Date {
        return this.joined;
    }

    set joined(value: Date) {
        this.joined = value;
    }

    get location(): Location | null {
        return this.location;
    }

    set location(value: Location | null) {
        this.location = value;
    }


}

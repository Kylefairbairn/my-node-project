/**
 * @file Controller RESTful Web service API for Authentication resource
 */

import UserDao from "../daos/UserDao";
import {Express, Response,Request} from "express";
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * @class AuthenticationController Implements RESTful Web service API for Authentication resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/auth/login</li>
 *     <li>POST /api/auth/profile</li>
 *     <li>POST /api/auth/logout</li>
 *     <li>POST /api/auth/signup</li>

 * </ul>
 * @property {userDao} userDao Singleton DAO implementing User CRUD operations
 * @property {AuthenticationController} AuthenticationController Singleton controller implementing
 * RESTful Web service API
 */
const AuthenticationController = (app: Express) => {

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return AuthenticationController
     */
    const userDao: UserDao = UserDao.getInstance();


    /**
     * signs up a user on the client side if they don't have a profile
     * @param {Request} req Represents request from client, including the path
     * parameter body representing the users information
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing a new user object
     */
    const signup = async (req: Request, res: Response) => {
        const newUser = req.body;
        const password = newUser.password;

        const hash = await bcrypt.hash(password, saltRounds);
        newUser.password = hash;

        const existingUser = await userDao
            .findUserByUsername(req.body.username);
        if (existingUser) {
            res.sendStatus(403);
            return;
        } else {
            const insertedUser = await userDao
                .createUser(newUser);
            insertedUser.password = '';
            // @ts-ignore
            req.session['profile'] = insertedUser;
            res.json(insertedUser);
        }
    }

    /**
     * Shows the client their profile using session management after logging in
     * @param {Request} req Represents request from client, including the path
     * parameter body representing the users information
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON array to include their profile
     */
    const profile = (req:Request, res:Response) => {
        // @ts-ignore
        const profile = req.session['profile'];
        if (profile) {
            profile.password = "";
            res.json(profile);
        } else {
            res.sendStatus(403);
        }
    }

    /**
     * Logs out a user on the client side if they don't have a profile
     * @param {Request} req Represents request from client, including the path
     * parameter body representing the users information
     * @param {Response} res Represents response to client, logs out user
     */
    const logout = (req:Request, res:Response) => {
        // @ts-ignore
        req.session.destroy();
        res.sendStatus(200);
    }

    /**
     * Allows a user on the client side to log in into their account
     * @param {Request} req Represents request from client, including the path
     * parameter body representing the users information
     * @param {Response} res Represents response to client, allows them to login in
     * to their account
     */
    const login = async (req:Request, res:Response) => {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = await userDao
            .findUserByUsername(username);

        if (!existingUser) {
            console.log(existingUser)
            res.sendStatus(403);
            return;
        }

        // https://stackoverflow.com/questions/64044667/nodes-bcrypt-compare-returns-false-though-its-true
        // found this, and sometimes it takes a button press twice but seems to work
        const salt = await bcrypt.genSalt(15)
        const newHashedPassword = await bcrypt.hash(password, salt)

        const match = await bcrypt.compare(password, newHashedPassword)

        if (match) {
            existingUser.password = '*****';
            // @ts-ignore
            req.session['profile'] = existingUser;
            res.json(existingUser);
        }


         else {
            console.log("accessing the else ")
            res.sendStatus(403);
        }
    };

    app.post("/api/auth/login", login);
    app.post("/api/auth/profile", profile);
    app.post("/api/auth/logout", logout);
    app.post("/api/auth/signup", signup);
}

export default AuthenticationController;

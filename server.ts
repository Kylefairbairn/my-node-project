
/**
 * @file Implements an Express Node HTTP server.
 */
import express from 'express';
import {Request, Response} from 'express';
import * as mongoose from "mongoose";


import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import FollowController from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import AuthenticationController from "./controllers/auth-controller";
import DislikeController from "./controllers/DislikeController";


const cors = require('cors')
const app = express();
const session = require('express-session');
require('dotenv').config()

const SECRET = "12345"

// let sess = {
//  secret: "process.env.SECRET",
//  cookie: {
//     secure: false
//  }
// }

//need to make a SECRET ENV
let sess = {
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        secure: false
    }
}

if(process.env.ENV === 'PRODUCTION'){
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))



app.use(session(sess))
app.use(express.json());


const URL = "mongodb+srv://kyle:isawesome@cluster0.0lvcoyg.mongodb.net/test"

mongoose.connect(URL)

// a2 database = tuiter2
//mongoose.connect('mongodb://localhost:27017/tuiterA2');

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

const dislikeController = DislikeController.getInstance(app);
const likesController = LikeController.getInstance(app);
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app)
const messageController = MessageController.getInstance(app)
const followController = FollowController.getInstance(app)
AuthenticationController(app)

const PORT = 4000;

app.listen(process.env.PORT || PORT);

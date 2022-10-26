
/**
 * @file Implements an Express Node HTTP server.
 */
import express from 'express';
import {Request, Response} from 'express';
import * as mongoose from "mongoose";

import UserDao from "./daos/UserDao";


import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import BookmarkDao from "./daos/BookmarkDao";
import BookmarkController from "./controllers/BookmarkController";
import MessagesDao from "./daos/MessagesDao";
import MessageController from "./controllers/MessageController";
import FollowController from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import FollowDao from "./daos/FollowDao";


const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());


 const URL = "mongodb+srv://kyle:isawesome@cluster0.0lvcoyg.mongodb.net/test"

mongoose.connect(URL)

// a2 database = tuiter2
//mongoose.connect('mongodb://localhost:27017/tuiterA2');

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));


const likesController = LikeController.getInstance(app);
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app)
const messageController = MessageController.getInstance(app)
const followController = FollowController.getInstance(app)

const PORT = 4000;
app.listen(process.env.PORT || PORT);

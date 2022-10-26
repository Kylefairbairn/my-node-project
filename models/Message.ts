/**
 * @file Implements message
 */

import User from "./User";

export default interface Message{
    userSending: User,
    userReceiving: User,
    message: string
}
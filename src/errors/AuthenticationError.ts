import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class AuthenticationError extends ClientError {
    username: string;

    constructor(username: string) {
        super(StatusCodes.FORBIDDEN, `Incorrect password for user ${username}`);
        this.name = "AuthenticationError";
        this.username = username;
    }
}

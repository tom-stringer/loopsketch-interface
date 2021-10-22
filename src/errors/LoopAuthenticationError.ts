import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class LoopAuthenticationError extends ClientError {
    userId: number;
    loop: string;

    constructor(userId: number, loop: string) {
        super(StatusCodes.FORBIDDEN, `User ${userId} is not permitted to perform this action on loop "${loop}"`);
        this.name = "LoopAuthenticationError";
        this.userId = userId;
        this.loop = loop;
    }
}

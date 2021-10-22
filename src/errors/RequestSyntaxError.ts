import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class RequestSyntaxError extends ClientError {
    constructor() {
        super(StatusCodes.BAD_REQUEST, `Incorrect request syntax`);
        this.name = "RequestSyntaxError";
    }
}

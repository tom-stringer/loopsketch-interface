import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class InvalidFileRequestError extends ClientError {
    constructor() {
        super(StatusCodes.BAD_REQUEST, `Invalid file request: files not found.`);
        this.name = "InvalidFileRequest";
    }
}

import { StatusCodes } from "http-status-codes";
import ApiError from "./ApiError";

export default class ServerError extends ApiError {
    constructor() {
        super(StatusCodes.INTERNAL_SERVER_ERROR, "The server has encountered an error.");
        this.name = "ServerError";
    }
}

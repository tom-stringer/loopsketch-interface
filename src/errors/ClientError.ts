import { StatusCodes } from "http-status-codes";
import ApiError from "./ApiError";

export default class ClientError extends ApiError {
    constructor(status: StatusCodes, message: string) {
        super(status, message);
        this.name = "ClientError";
    }
}

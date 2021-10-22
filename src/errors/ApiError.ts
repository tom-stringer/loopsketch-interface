import { StatusCodes } from "http-status-codes";

export default class ApiError extends Error {
    status: StatusCodes;

    constructor(status: StatusCodes, message: string) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

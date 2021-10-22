import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class AuthenticationRequiredError extends ClientError {
    constructor() {
        super(StatusCodes.FORBIDDEN, "This action requires authentication");
        this.name = "AuthenticationRequiredError";
    }
}

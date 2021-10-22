import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class PropertyInvalidError extends ClientError {
    property: string;
    reason?: string;

    constructor(property: string, reason?: string) {
        super(StatusCodes.BAD_REQUEST, `Property ${property} is invalid`);
        this.name = "PropertyInvalidError";
        this.property = property;
        this.reason = reason;
    }
}

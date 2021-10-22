import { StatusCodes } from "http-status-codes";
import ClientError from "./ClientError";

export default class PropertyRequiredError extends ClientError {
    property: string;

    constructor(property: string) {
        super(StatusCodes.BAD_REQUEST, `Property ${property} is required`);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

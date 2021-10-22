import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class PropertyTypeError extends ClientError {
    property: string;
    required: string;
    given: string;

    constructor(property: string, required: string, given: string) {
        super(StatusCodes.BAD_REQUEST, `Property ${property} should have type ${required} but has type ${given}`);
        this.name = "PropertyTypeError";
        this.property = property;
        this.required = required;
        this.given = given;
    }
}

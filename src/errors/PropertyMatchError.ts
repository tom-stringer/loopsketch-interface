import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class PropertyMatchError extends ClientError {
    property1: string;
    property2: string;

    constructor(property1: string, property2: string) {
        super(StatusCodes.BAD_REQUEST, `Property ${property1} must match property ${property2}`);
        this.name = "PropertyMatchError";
        this.property1 = property1;
        this.property2 = property2;
    }
}

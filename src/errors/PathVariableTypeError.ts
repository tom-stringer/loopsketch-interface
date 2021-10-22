import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class PathVariableTypeError extends ClientError {
    variable: string;
    required: string;
    given: string;

    constructor(variable: string, required: string, given: string) {
        super(StatusCodes.BAD_REQUEST, `Path variable ${variable} should have type ${required} but has type ${given}`);
        this.name = "PathVariableTypeError";
        this.variable = variable;
        this.required = required;
        this.given = given;
    }
}

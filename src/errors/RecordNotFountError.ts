import { StatusCodes } from "http-status-codes";
import ClientError from "./ClientError";

export default class RecordNotFoundError extends ClientError {
    identifier: number | string;
    table: string;

    constructor(identifier: number | string, table: string) {
        super(StatusCodes.NOT_FOUND, `Record ${identifier} not found in table ${table}`);
        this.name = "RecordNotFoundError";
        this.identifier = identifier;
        this.table = table;
    }
}

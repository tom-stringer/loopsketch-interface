import ClientError from "./ClientError";
import { StatusCodes } from "http-status-codes";

export default class RecordConflictError extends ClientError {
    identifier: string;
    table: string;

    constructor(identifier: string, table: string) {
        super(StatusCodes.CONFLICT, `Record ${identifier} conflicts in table ${table}`);
        this.name = "RecordConflictError";
        this.identifier = identifier;
        this.table = table;
    }
}

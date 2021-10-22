import { StatusCodes } from "http-status-codes";
import { Response } from "express";
import ApiError from "../errors/ApiError";

export type ResponseBody<D> = {
    data?: D;
    error?: {
        status: StatusCodes;
        data: ApiError;
    };
};

export type ApiResponse<D> = Response<ResponseBody<D>>;

// Basic response data types.

export type CountResponseData = { count: number };

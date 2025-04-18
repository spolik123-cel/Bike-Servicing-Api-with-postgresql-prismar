"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    var _a, _b;
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let message = 'Something went wrong';
    let errorDetails = {};
    // Handle Prisma errors
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case 'P2002':
                // Unique constraint failed
                statusCode = http_status_1.default.CONFLICT;
                message = 'Duplicate value entered for unique field';
                errorDetails = {
                    target: (_a = err.meta) === null || _a === void 0 ? void 0 : _a.target,
                    message: `The value for '${(_b = err.meta) === null || _b === void 0 ? void 0 : _b.target}' already exists.`,
                };
                break;
            case 'P2025':
                // Record not found
                statusCode = http_status_1.default.NOT_FOUND;
                message = 'Requested record not found';
                errorDetails = err.meta;
                break;
            default:
                message = err.message;
                errorDetails = err.meta;
        }
    }
    // Prisma validation error
    else if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        statusCode = http_status_1.default.BAD_REQUEST;
        message = 'Validation failed for the data provided';
        errorDetails = err.message;
    }
    // Catch all fallback
    res.status(statusCode).json({
        success: false,
        message,
        error: errorDetails || err,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};
exports.default = globalErrorHandler;

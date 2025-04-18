"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const notFound = (req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND",
        error: {
            path: req.originalUrl,
            message: 'Your Requested Path Is Not Found'
        }
    });
};
exports.default = notFound;

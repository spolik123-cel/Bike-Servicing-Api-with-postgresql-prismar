import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import httpStatus from 'http-status';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let message = 'Something went wrong';
  let errorDetails: any = {};

  // Handle Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case 'P2002':
        // Unique constraint failed
        statusCode = httpStatus.CONFLICT;
        message = 'Duplicate value entered for unique field';
        errorDetails = {
          target: err.meta?.target,
          message: `The value for '${err.meta?.target}' already exists.`,
        };
        break;

      case 'P2025':
        // Record not found
        statusCode = httpStatus.NOT_FOUND;
        message = 'Requested record not found';
        errorDetails = err.meta;
        break;

      default:
        message = err.message;
        errorDetails = err.meta;
    }
  }

  // Prisma validation error
  else if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = httpStatus.BAD_REQUEST;
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

export default globalErrorHandler;

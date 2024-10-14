import {Request, Response, NextFunction} from "express";

import {CustomError} from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
  }

  res.status(400).send({
    errors: [{message: 'Something went wrong'}]
  });
}
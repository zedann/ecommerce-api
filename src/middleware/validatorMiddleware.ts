import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
const validatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = validationResult(req);
  if (!result.isEmpty()) return res.send({ errors: result.array() });
  next();
};

export default validatorMiddleware;

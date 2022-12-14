import serverError from "../interfaces/serverErrorInterface.js";
import { NextFunction, Request, Response } from "express";
export default function finalErrorHandler(
  err: serverError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500);

  res.json(err.getError());
}

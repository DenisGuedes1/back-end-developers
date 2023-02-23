import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error/error";
const verifytokenValidmiddleware = async (
  request: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  let token = request.headers.authorization;
  if (!token) {
    throw new AppError("Token is missing", 401);
  }
  token = token.split(" ")[1];
  jwt.verify(token, "KEY SECRET", (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    // request.user = {
    //   id: parseInt(decoded.sub),
    //   admin: decoded.boolean,
    // };
  });
  return next();
};
export { verifytokenValidmiddleware };

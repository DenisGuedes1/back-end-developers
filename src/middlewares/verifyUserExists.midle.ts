import { NextFunction, Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import client from "../dataBase/config";
import { AppError } from "../error/error";

const verifyExistsuserMidle = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = parseInt(req.params.id);
  const queryStringUserExists: string = `
  
    SELECT
         * 
          FROM 
            users
              WHERE 
        id=$1;

  `;
  const queryConfig: QueryConfig = {
    text: queryStringUserExists,
    values: [userId],
  };
  const queryResult: QueryResult = await client.query(queryConfig);
  if (queryResult.rowCount === 0) {
    throw new AppError("User not exists", 404);
  }
  return next();
};
export default verifyExistsuserMidle;

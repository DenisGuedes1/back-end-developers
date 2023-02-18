import { QueryConfig, QueryResult } from "pg";
import client from "../../dataBase/config";
import { AppError } from "../../error/error";

const softDeleteuserService = async (userId: number): Promise<void> => {
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

  const queryString: string = `
   UPDATE
       users
      SET 
      active = false
    WHERE 
      id = $1;
`;
  const queryConfigUserExists: QueryConfig = {
    text: queryString,
    values: [userId],
  };
  await client.query(queryConfigUserExists);
};

export default softDeleteuserService;

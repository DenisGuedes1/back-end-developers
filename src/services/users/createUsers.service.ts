import { QueryConfig, QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../dataBase";
import { AppError } from "../../error/error";
import {
  IUserRemovePassword,
  IUserResult,
  IuserRequest,
} from "../../interfaces/users.interface";
const createUsersService = async (
  userData: IuserRequest
): Promise<IUserRemovePassword> => {
  const queryStringEmailunique: string = `
  SELECT 
    *
    FROM
      users
        WHERE
          email =$1;
  `;
  const queryconfigEmailUnique: QueryConfig = {
    text: queryStringEmailunique,
    values: [userData.email],
  };

  const queryResulUserEmailunique: QueryResult = await client.query(
    queryconfigEmailUnique
  );

  if (queryResulUserEmailunique.rowCount > 0) {
    throw new AppError("User already exists!", 409);
  }
  const queryString: string = format(
    `
  INSERT INTO 
  users(%I)
  VALUES (%L)
  RETURNING id,name,email,admin, active;
  `,
    Object.keys(userData),
    Object.values(userData)
  );
  const queryResult: IUserResult = await client.query(queryString);
  return queryResult.rows[0];
};
export default createUsersService;

import format from "pg-format";
import { client } from "../../dataBase";
import {
  IUserRemovePassword,
  IUserResult,
  IuserRequest,
} from "../../interfaces/users.interface";
const createUsersService = async (
  userData: IuserRequest
): Promise<IUserRemovePassword> => {
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

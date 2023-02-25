import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { QueryConfig } from "pg";
import { client } from "../../dataBase/index";
import { AppError } from "../../error/error";
import { IloginRequest } from "../../interfaces/Ilogin.interface";
import { IUserResultWithPassword } from "../../interfaces/users.interface";
const createLoginservice = async (
  loginData: IloginRequest
): Promise<string> => {
  const queryString: string = `
  
  SELECT
    *
  FROM
      users
      WHERE 
        email=$1;
  `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [loginData.email],
  };
  const queryResult: IUserResultWithPassword = await client.query(queryConfig);
  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email or password", 401);
  }
  const matchPassword: boolean = await compare(
    loginData.password,
    queryResult.rows[0].password
  );
  if (!matchPassword) {
    throw new AppError("Wrong email or password", 401);
  }
  const token: string = jwt.sign(
    {
      admin: queryResult.rows[0].admin,
      active: queryResult.rows[0].active,
    },
    "KEY SECRET",
    {
      expiresIn: "24h",
      subject: queryResult.rows[0].id.toString(),
    }
  );
  return token;
};

export default createLoginservice;

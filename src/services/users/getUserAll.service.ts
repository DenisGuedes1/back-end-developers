import format from "pg-format";
import { client } from "../../dataBase";
import { IUserResultNotPassword } from "../../interfaces/users.interface";

const getAllUserService = async () => {
  const queryString: string = format(`
  SELECT 
  "id","name","email","admin",active
      FROM 
    users 
   ;
   
  `);

  const queryResult: IUserResultNotPassword = await client.query(queryString);

  return queryResult.rows;
};

export default getAllUserService;

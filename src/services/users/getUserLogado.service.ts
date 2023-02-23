import { QueryConfig } from "pg";
import format from "pg-format";
import { client } from "../../dataBase";

const getUserSignin = async (userId: number) => {
  const queryString: string = format(`
  SELECT 
  "id","name","email","admin","active"
      FROM 
    users 
    WHERE id = $1
   ;
   
  `);
  const queryConfigUserExists: QueryConfig = {
    text: queryString,
    values: [userId],
  };
  const { rows } = await client.query(
    queryConfigUserExists.text,
    queryConfigUserExists.values
  );

  return rows[0];
};

export default getUserSignin;

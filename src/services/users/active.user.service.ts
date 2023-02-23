import { QueryConfig } from "pg";
import client from "../../dataBase/config";

const activeUserPut = async (userId: number): Promise<void> => {
  const queryString: string = `
   UPDATE
       users
      SET 
      active = true
    WHERE 
      id = $1
      RETURNING id,name,email,admin,active;
`;
  const queryConfigUserExists: QueryConfig = {
    text: queryString,
    values: [userId],
  };
  await client.query(queryConfigUserExists);
};

export default activeUserPut;

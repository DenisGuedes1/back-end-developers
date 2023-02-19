import { QueryConfig } from "pg";
import client from "../../dataBase/config";

const softDeleteuserService = async (userId: number): Promise<void> => {
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

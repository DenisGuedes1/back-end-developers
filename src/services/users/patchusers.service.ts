import { QueryConfig } from "pg";
import { client } from "../../dataBase/index";

const patchFromUsers = async (userId: number, data: string) => {
  const queryString: string = `
    UPDATE
      users
    SET 
      name = $1
    WHERE 
      id = $2
      RETURNING "id","name", "admin", "active";

  `;

  const queryConfigActualizeuser: QueryConfig = {
    text: queryString,
    values: [data, userId],
  };

  const queryResult = await client.query(queryConfigActualizeuser);
  return queryResult.rows[0];
};

export default patchFromUsers;

import { QueryResult } from "pg";

interface IuserRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  active: boolean;
}
interface IUser extends IuserRequest {
  id: number;
}

type IUserRemovePassword = Omit<IuserRequest, "password">;
type IUserResult = QueryResult<IUserRemovePassword>;
type IUserResultNotPassword = QueryResult<IUserRemovePassword>;

export {
  IuserRequest,
  IUser,
  IUserRemovePassword,
  IUserResult,
  IUserResultNotPassword,
};

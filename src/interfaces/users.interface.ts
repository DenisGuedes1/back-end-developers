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
type IUserResultWithPassword = QueryResult<IUser>;
type IUserResultNotPassword = QueryResult<IUserRemovePassword>;
type TuserActulize = Omit<IuserRequest, "id,admin,active">;
type TuserActulizeResult = QueryResult<TuserActulize>;

export {
  IuserRequest,
  IUser,
  IUserRemovePassword,
  IUserResult,
  IUserResultNotPassword,
  TuserActulizeResult,
  IUserResultWithPassword,
};

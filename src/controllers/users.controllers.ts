//recebe a requisição e retorna a resposta
import { Request, Response } from "express";
import { IuserRequest } from "../interfaces/users.interface";
import createUsersService from "../services/users/createUsers.service";
const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IuserRequest = req.body;
  const newUser = await createUsersService(userData); //retorna mensagem no console
  return res.status(201).json(newUser);
};
export { createUsersController };

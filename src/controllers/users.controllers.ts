//recebe a requisição e retorna a resposta
import { Request, Response } from "express";
import { IuserRequest } from "../interfaces/users.interface";
import createUsersService from "../services/users/createUsers.service";
import getUseridService from "../services/users/getUserAll.service";
import softDeleteuserService from "../services/users/softDeleteUser.service";
const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IuserRequest = req.body;
  const newUser = await createUsersService(userData); //retorna mensagem no console
  return res.status(201).json(newUser);
};
const getAll = async (req: Request, resp: Response): Promise<Response> => {
  const user = await getUseridService();

  return resp.json(user);
};
const softDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  await softDeleteuserService(userId);

  return res.status(204).send();
};
export { createUsersController, getAll, softDeleteController };

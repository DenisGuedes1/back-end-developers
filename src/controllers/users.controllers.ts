//recebe a requisição e retorna a resposta
import { Request, Response } from "express";
import { IuserRequest } from "../interfaces/users.interface";
import createUsersService from "../services/users/createUsers.service";
import getAllUserService from "../services/users/getUserAll.service";

import patchFromUsers from "../services/users/patchusers.service";
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
  const user = await getAllUserService();

  return resp.json(user);
};
const softDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  // if (userId !== req.user.idUser && !req.user.typeUser) {
  //   throw new AppError("VeriFy Permission", 403);
  // }
  await softDeleteuserService(userId);

  return res.status(204).send();
};
const actulizeFromUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const data = req.body.name;
  const userEdit = await patchFromUsers(userId, data);

  return res.status(200).json(userEdit);
};

// const editUserControllers = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   ;
//   const id: number = Number(req.params.id);

//   if (id !== req.user.idUser && !req.user.typeUser) {
//     throw new AppError("Insufficient Permission", 403);
//   }
// };
export {
  createUsersController,
  getAll,
  softDeleteController,
  actulizeFromUsers,
};

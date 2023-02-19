import { Router } from "express";
import {
  createUsersController,
  getAll,
  softDeleteController,
} from "../controllers/users.controllers";
import verifyExistsuserMidle from "../middlewares/verifyUserExists.midle";
const userRouters: Router = Router();
userRouters.post("", createUsersController);
userRouters.get("", getAll);
userRouters.delete("/:id", verifyExistsuserMidle, softDeleteController);
export default userRouters;

import { Router } from "express";
import {
  createUsersController,
  getAll,
  softDeleteController,
} from "../controllers/users.controllers";
const userRouters: Router = Router();
userRouters.post("", createUsersController);
userRouters.get("", getAll);
userRouters.delete("/:id", softDeleteController);
export default userRouters;

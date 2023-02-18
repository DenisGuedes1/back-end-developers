import { Router } from "express";
import { createUsersController } from "../controllers/users.controllers";
const userRouters: Router = Router();
userRouters.post("", createUsersController);
userRouters.delete("/:id", createUsersController);
export default userRouters;

import { Router } from "express";
import {
  actulizeFromUsers,
  createUsersController,
  getAll,
  softDeleteController,
} from "../controllers/users.controllers";
import { verifyExistsuserMidle } from "../middlewares/verifyUserExists.midle";
import { verifytokenValidmiddleware } from "../middlewares/verifytoken.mmidle";

const userRouters: Router = Router();
userRouters.post(
  "",

  createUsersController
);
userRouters.get("", verifytokenValidmiddleware, getAll);
userRouters.delete(
  "/:id",
  verifytokenValidmiddleware,
  verifyExistsuserMidle,
  softDeleteController
);
userRouters.patch("/:id", verifytokenValidmiddleware, actulizeFromUsers);
export default userRouters;

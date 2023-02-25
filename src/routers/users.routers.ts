import { Router } from "express";

import {
  activeFromusers,
  actulizeFromUsers,
  createUsersController,
  getAll,
  getuserLogado,
  softDeleteController,
} from "../controllers/users.controllers";
import {
  verifyActive,
  verifyIsAdmin,
  verifyUserPermissions,
} from "../middlewares/verifyAdminIsUser.midle";
import { verifyExistsuserMidle } from "../middlewares/verifyUserExists.midle";
import { verifytokenValidmiddleware } from "../middlewares/verifytoken.mmidle";

const userRouters: Router = Router();
userRouters.post(
  "",

  createUsersController
);
userRouters.get("", verifytokenValidmiddleware, verifyIsAdmin, getAll);
userRouters.delete(
  "/:id",
  verifytokenValidmiddleware,
  verifyExistsuserMidle,
  verifyIsAdmin,
  verifyUserPermissions,
  softDeleteController
);
userRouters.patch(
  "/:id",
  verifytokenValidmiddleware,
  verifyUserPermissions,

  actulizeFromUsers
);
userRouters.put(
  "/:id/recover",
  verifytokenValidmiddleware,
  verifyActive,
  activeFromusers
);
userRouters.get(
  "/profile",
  verifytokenValidmiddleware,

  getuserLogado
);
export default userRouters;

import { Router } from "express";
import { createloginController } from "../controllers/login.controller";
import { VerifyDataLoginFromUser } from "../middlewares/verifyUserExists.midle";
import { createdLoginSchema } from "../schemas/login.schema";
const loginRouter: Router = Router();

loginRouter.post(
  "",
  VerifyDataLoginFromUser(createdLoginSchema),
  createloginController
);
export default loginRouter;

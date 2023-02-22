import { Request, Response } from "express";
import createLoginservice from "../services/login/createdlogin.service";
const createloginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await createLoginservice(req.body);
  return res.json({
    token: token,
  });
};

export { createloginController };

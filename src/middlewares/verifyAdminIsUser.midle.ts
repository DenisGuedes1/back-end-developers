import { NextFunction, Request, Response } from "express";

const verifyUserPermissions = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const isAdmin = req.user.admin;
  const requestedUserId = req.params.id;

  if (isAdmin) {
    return next();
  } else if (parseInt(requestedUserId) != userId) {
    return resp.status(403).json({ menssage: "Insufficient Permission" });
  }

  return next();
};

export default verifyUserPermissions;

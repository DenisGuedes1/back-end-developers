import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/error";

const verifyUserPermissions = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const userId = req.user.id;
  const isAdmin = req.user.admin;
  const requestedUserId = req.params.id;

  if (parseInt(requestedUserId) == userId || isAdmin == true) {
    return next();
  } else {
    return resp.status(403).json({ menssage: "Insufficient Permission" });
  }
};
const verifyIsAdmin = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authentication = req.user.admin;

  if (authentication === false) {
    throw new AppError("Insufficient Permission", 403);
  }

  return next();
};
const verifyActive = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const active = req.user.active;

  if (active === true) {
    throw new AppError("User already active ", 404);
  } else {
    return next();
  }
};
const verifyActiveSoftDelete = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const active = req.user.active;
  console.log(active);

  if (active === false) {
    throw new AppError("User is already desactivated", 404);
  } else {
    return next();
  }
};

export {
  verifyUserPermissions,
  verifyIsAdmin,
  verifyActive,
  verifyActiveSoftDelete,
};

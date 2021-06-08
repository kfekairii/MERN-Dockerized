import { Request, Response, NextFunction } from "express";

export const homeController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("<h1>Hello world..!</h1>");
};

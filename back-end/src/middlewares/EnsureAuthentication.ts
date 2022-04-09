import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";

export function ensureAuthentication(
  next: NextFunction,
  req: Request,
  res: Response
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "Invalid Authentication",
    });
  }

  const [, token] = authToken.split(" ");

  try {
    verify(token, "20cc2efa-141c-4802-bc42-af8245d0984a");

    return next();
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
}

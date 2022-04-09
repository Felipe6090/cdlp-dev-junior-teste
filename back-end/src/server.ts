import express, { json, NextFunction, Request, Response } from "express";

import "express-async-errors";

import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    status: "Error",
    message: error.message,
  });
});

app.listen(4000, () => console.log("Running"));

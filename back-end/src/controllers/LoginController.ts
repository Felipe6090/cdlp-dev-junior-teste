import { Request, Response } from "express";
import LoginHandler from "../services/LoginService";

export default class LoginController {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const service = new LoginHandler();

    const user = await service.execute({ username, password });

    return res.json(user);
  }
}

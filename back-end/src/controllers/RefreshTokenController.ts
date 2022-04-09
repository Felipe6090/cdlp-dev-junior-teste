import { Request, Response } from "express";
import RefreshTokenService from "../services/RefreshTokenService";

export default class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const { refreshToken } = req.body;

    const handler = new RefreshTokenService();

    const token = await handler.execute(refreshToken);

    return res.json(token);
  }
}

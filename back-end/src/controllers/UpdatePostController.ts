import { Request, Response } from "express";
import UpdatePostService from "../services/UpdatePostService";

export default class UpdatePostController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new UpdatePostService();

    const result = await service.execute(data);

    return res.json(result);
  }
}

import { Request, Response } from "express";
import UpdatePostService from "../services/UpdatePostService";

export default class DeletePostController {
  async handle(req: Request, res: Response) {
    const { postId } = req.body;

    const service = new UpdatePostService();

    const result = await service.execute(postId);

    return res.json(result);
  }
}

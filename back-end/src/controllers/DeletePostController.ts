import { Request, Response } from "express";
import DeletePostService from "../services/DeletePostService";

export default class DeletePostController {
  async handle(req: Request, res: Response) {
    const postID = req.params?.postID;

    const service = new DeletePostService();

    const result = await service.execute(postID);

    return res.json(result);
  }
}

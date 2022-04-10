import { Request, Response } from "express";
import CreatePostService from "../services/CreatePostService";

type IPost = {
  id: string;
  username: string;
  userId: string;
  title: string;
  content: string;
};

export default class CreatePostController {
  async handle(req: Request, res: Response) {
    const postData: IPost = req.body;

    const service = new CreatePostService();

    const result = await service.execute(postData);

    return res.json(result);
  }
}

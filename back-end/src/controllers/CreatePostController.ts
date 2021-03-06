import { Request, Response } from "express";

import CreatePostService from "../services/CreatePostService";

import { IPost } from "../types/IPost";

export default class CreatePostController {
  async handle(req: Request, res: Response) {
    const postData: IPost = req.body;

    const service = new CreatePostService();

    const result = await service.execute(postData);

    return res.json(result);
  }
}

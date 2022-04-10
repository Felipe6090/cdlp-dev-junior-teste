import { Request, Response } from "express";

import GetPostsService from "../services/GetPostsService";

export default class GetPostsController {
  async handle(req: Request, res: Response) {
    const service = new GetPostsService();

    const result = await service.execute();

    return res.json(result);
  }
}

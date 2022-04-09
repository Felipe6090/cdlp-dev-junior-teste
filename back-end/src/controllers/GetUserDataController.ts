import { Request, Response } from "express";
import GetUserDataService from "../services/GetUserDataService";

export default class GetUserDataController {
  async handle(req: Request, res: Response) {
    const { tokenId } = req.body;

    const service = new GetUserDataService();

    const result = await service.execute(tokenId);

    return res.json(result);
  }
}

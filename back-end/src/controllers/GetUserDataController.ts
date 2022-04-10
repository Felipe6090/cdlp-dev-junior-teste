import { Request, Response } from "express";
import GetUserDataService from "../services/GetUserDataService";

export default class GetUserDataController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const service = new GetUserDataService();

    const result = await service.execute(id);

    return res.json(result);
  }
}

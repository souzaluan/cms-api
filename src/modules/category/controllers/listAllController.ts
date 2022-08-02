import { Request, Response } from "express";
import { PrismaRepository } from "../repositories/prisma/prisma-repository";
import { ListAllService } from "../services/listAllService";

export class ListAllController {
  async handle(req: Request, res: Response) {
    try {
      const prismaRepository = new PrismaRepository();

      const listAllService = new ListAllService(prismaRepository);

      const response = await listAllService.execute();

      return res.json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

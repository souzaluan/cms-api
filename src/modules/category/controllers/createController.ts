import { Request, Response } from "express";
import { PrismaRepository } from "../repositories/prisma/prisma-repository";
import { CreateService } from "../services/createService";

export class CreateController {
  async handle(req: Request, res: Response) {
    try {
      const prismaRepository = new PrismaRepository();

      const createService = new CreateService(prismaRepository);

      const response = await createService.execute({ data: req.body });

      return res.json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

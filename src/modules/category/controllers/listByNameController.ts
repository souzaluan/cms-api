import { Request, Response } from "express";
import { PrismaRepository } from "../repositories/prisma/prisma-repository";
import { ListByNameService } from "../services/listByNameService";

export class ListByNameController {
  async handle(req: Request, res: Response) {
    try {
      const prismaRepository = new PrismaRepository();

      const listByNameService = new ListByNameService(prismaRepository);

      const { name } = req.body;

      const response = await listByNameService.execute({
        where: {
          name,
        },
      });

      return res.json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

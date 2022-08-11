import { Request, Response } from "express";
import { PrismaRepository } from "../repositories/prisma/prisma-repository";
import { CreateService } from "../services/createService";

export class CreateController {
  async handle(req: Request, res: Response) {
    try {
      if (!req.file) throw new Error("Nenhuma imagem");

      const prismaRepository = new PrismaRepository();

      const createService = new CreateService(prismaRepository);

      const response = await createService.execute({
        data: { ...req.body, previewImage: `/upload/${req.file.filename}` },
      });

      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
}

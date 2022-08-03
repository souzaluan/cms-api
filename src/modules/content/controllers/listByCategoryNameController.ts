import { Request, Response } from "express";

import { ListByNameService as ListCategoryByNameService } from "../../category/services/listByNameService";
import { ListByCategoryNameService } from "../services/listByCategoryNameService";

import { PrismaRepository as PrismaCategoryRepository } from "../../category/repositories/prisma/prisma-repository";
import { PrismaRepository } from "../repositories/prisma/prisma-repository";

export class ListByCategoryNameController {
  async handle(req: Request, res: Response) {
    try {
      const prismaRepository = new PrismaRepository();
      const listByCategoryNameService = new ListByCategoryNameService(
        prismaRepository
      );

      const prismaCategoryRepository = new PrismaCategoryRepository();
      const listCategoryByNameService = new ListCategoryByNameService(
        prismaCategoryRepository
      );

      const { name } = req.params;
      name.replaceAll("%20", " ");

      const [category] = await listCategoryByNameService.execute({
        where: {
          name: {
            equals: name,
            mode: "insensitive",
          },
        },
      });

      if (category?.id) {
        const response = await listByCategoryNameService.execute({
          where: { categoryId: category.id },
        });

        return res.json(response);
      }

      throw new Error("Category not found");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

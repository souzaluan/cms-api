"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryNameController = void 0;
const listByNameService_1 = require("../../category/services/listByNameService");
const listByCategoryNameService_1 = require("../services/listByCategoryNameService");
const prisma_repository_1 = require("../../category/repositories/prisma/prisma-repository");
const prisma_repository_2 = require("../repositories/prisma/prisma-repository");
class ListByCategoryNameController {
    async handle(req, res) {
        try {
            const prismaRepository = new prisma_repository_2.PrismaRepository();
            const listByCategoryNameService = new listByCategoryNameService_1.ListByCategoryNameService(prismaRepository);
            const prismaCategoryRepository = new prisma_repository_1.PrismaRepository();
            const listCategoryByNameService = new listByNameService_1.ListByNameService(prismaCategoryRepository);
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
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}
exports.ListByCategoryNameController = ListByCategoryNameController;

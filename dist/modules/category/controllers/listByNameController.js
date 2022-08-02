"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByNameController = void 0;
const prisma_repository_1 = require("../repositories/prisma/prisma-repository");
const listByNameService_1 = require("../services/listByNameService");
class ListByNameController {
    async handle(req, res) {
        try {
            const prismaRepository = new prisma_repository_1.PrismaRepository();
            const listByNameService = new listByNameService_1.ListByNameService(prismaRepository);
            const { name } = req.body;
            const response = await listByNameService.execute({
                where: { name },
            });
            return res.json(response);
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}
exports.ListByNameController = ListByNameController;

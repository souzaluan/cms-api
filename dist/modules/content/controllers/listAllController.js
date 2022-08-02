"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllController = void 0;
const prisma_repository_1 = require("../repositories/prisma/prisma-repository");
const listAllService_1 = require("../services/listAllService");
class ListAllController {
    async handle(req, res) {
        try {
            const prismaRepository = new prisma_repository_1.PrismaRepository();
            const listAllService = new listAllService_1.ListAllService(prismaRepository);
            const response = await listAllService.execute();
            return res.json(response);
        }
        catch (error) {
            return res.status(400).json(error);
        }
    }
}
exports.ListAllController = ListAllController;

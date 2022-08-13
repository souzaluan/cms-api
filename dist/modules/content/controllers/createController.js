"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const prisma_repository_1 = require("../repositories/prisma/prisma-repository");
const createService_1 = require("../services/createService");
class CreateController {
    async handle(req, res) {
        try {
            if (!req.file)
                throw new Error("Nenhuma imagem");
            const prismaRepository = new prisma_repository_1.PrismaRepository();
            const createService = new createService_1.CreateService(prismaRepository);
            const response = await createService.execute({
                data: { ...req.body, previewImage: `/upload/${req.file.filename}` },
            });
            return res.json(response);
        }
        catch (error) {
            return res.json(error);
        }
    }
}
exports.CreateController = CreateController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRepository = void 0;
const prisma_1 = require("../../../../prisma");
class PrismaRepository {
    async create(query) {
        const response = await prisma_1.prisma.content.create(query);
        return response;
    }
    async findMany(query) {
        const response = await prisma_1.prisma.content.findMany(query);
        return response;
    }
}
exports.PrismaRepository = PrismaRepository;

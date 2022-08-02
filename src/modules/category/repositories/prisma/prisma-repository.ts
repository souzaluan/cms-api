import { ContentCategory, Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { Repository } from "..";

export class PrismaRepository implements Repository {
  async create(query: Prisma.ContentCategoryCreateArgs) {
    const response = await prisma.contentCategory.create(query);

    return response;
  }

  async findMany(query?: Prisma.ContentCategoryFindManyArgs) {
    const response = await prisma.contentCategory.findMany(query);

    return response;
  }

  async findUnique(query: Prisma.ContentCategoryFindUniqueArgs) {
    const response = await prisma.contentCategory.findUnique(query);

    return response;
  }
}

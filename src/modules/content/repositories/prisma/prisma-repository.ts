import { Content, Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { Repository } from "..";

export class PrismaRepository implements Repository {
  async create(query: Prisma.ContentCreateArgs) {
    const response = await prisma.content.create(query);

    return response;
  }

  async findMany(query?: Prisma.ContentFindManyArgs) {
    const response = await prisma.content.findMany(query);

    return response;
  }
}

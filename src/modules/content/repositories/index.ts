import { Prisma, Content } from "@prisma/client";

export interface Repository {
  create: (query: Prisma.ContentCreateArgs) => Promise<Content>;
  findMany: (query?: Prisma.ContentFindManyArgs) => Promise<Content[]>;
}

import { Prisma, ContentCategory } from "@prisma/client";

export interface Repository {
  create: (query: Prisma.ContentCategoryCreateArgs) => Promise<ContentCategory>;
  findMany: (
    query?: Prisma.ContentCategoryFindManyArgs
  ) => Promise<ContentCategory[]>;
  findUnique: (
    query: Prisma.ContentCategoryFindUniqueArgs
  ) => Promise<ContentCategory | null>;
}

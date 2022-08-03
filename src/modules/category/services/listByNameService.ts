import { Prisma } from "@prisma/client";
import { Repository } from "../repositories";

export class ListByNameService {
  constructor(private repository: Repository) {}

  async execute(query: Prisma.ContentCategoryFindManyArgs) {
    return await this.repository.findMany(query);
  }
}

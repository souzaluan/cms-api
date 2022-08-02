import { Prisma } from "@prisma/client";
import { Repository } from "../repositories";

export class ListByNameService {
  constructor(private repository: Repository) {}

  async execute(query: Prisma.ContentCategoryFindUniqueArgs) {
    return await this.repository.findUnique(query);
  }
}

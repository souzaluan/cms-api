import { Prisma } from "@prisma/client";
import { Repository } from "../repositories";

export class ListByCategoryNameService {
  constructor(private repository: Repository) {}

  async execute(query: Prisma.ContentFindManyArgs) {
    return await this.repository.findMany(query);
  }
}

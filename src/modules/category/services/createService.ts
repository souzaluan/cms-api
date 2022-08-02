import { Prisma } from "@prisma/client";
import { Repository } from "../repositories";

export class CreateService {
  constructor(private repository: Repository) {}

  async execute(query: Prisma.ContentCategoryCreateArgs) {
    return await this.repository.create(query);
  }
}

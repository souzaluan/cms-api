import { Repository } from "../repositories";

export class ListAllService {
  constructor(private repository: Repository) {}

  async execute() {
    return await this.repository.findMany();
  }
}

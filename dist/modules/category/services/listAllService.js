"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllService = void 0;
class ListAllService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.findMany();
    }
}
exports.ListAllService = ListAllService;

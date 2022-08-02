"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryNameService = void 0;
class ListByCategoryNameService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        return await this.repository.findMany(query);
    }
}
exports.ListByCategoryNameService = ListByCategoryNameService;

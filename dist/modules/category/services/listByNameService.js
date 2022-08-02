"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByNameService = void 0;
class ListByNameService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        return await this.repository.findUnique(query);
    }
}
exports.ListByNameService = ListByNameService;

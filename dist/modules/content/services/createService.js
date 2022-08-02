"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateService = void 0;
class CreateService {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        return await this.repository.create(query);
    }
}
exports.CreateService = CreateService;

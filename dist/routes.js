"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
// --- CATEGORY IMPORTS ---
const createController_1 = require("./modules/category/controllers/createController");
const listAllController_1 = require("./modules/category/controllers/listAllController");
// --- CONTENT IMPORTS ---
const createController_2 = require("./modules/content/controllers/createController");
const listAllController_2 = require("./modules/content/controllers/listAllController");
const listByCategoryNameController_1 = require("./modules/content/controllers/listByCategoryNameController");
exports.routes = (0, express_1.Router)();
// --- CATEGORY ROUTES ---
const createCategoryController = new createController_1.CreateController();
exports.routes.post("/category", createCategoryController.handle);
const listAllCategoryController = new listAllController_1.ListAllController();
exports.routes.get("/category", listAllCategoryController.handle);
// --- CONTENT ROUTES ---
const createContentController = new createController_2.CreateController();
exports.routes.post("/content", createContentController.handle);
const listAllContentController = new listAllController_2.ListAllController();
exports.routes.get("/content", listAllContentController.handle);
const listContentByCategoryName = new listByCategoryNameController_1.ListByCategoryNameController();
exports.routes.get("/content-category/:name", listContentByCategoryName.handle);

import { Router } from "express";

// --- CATEGORY IMPORTS ---

import { CreateController as CreateCategoryController } from "./modules/category/controllers/createController";
import { ListAllController as ListAllCategoryController } from "./modules/category/controllers/listAllController";

// --- CONTENT IMPORTS ---

import { CreateController as CreateContentController } from "./modules/content/controllers/createController";
import { ListAllController as ListAllContentController } from "./modules/content/controllers/listAllController";
import { ListByCategoryNameController as ListContentByCategoryNameController } from "./modules/content/controllers/listByCategoryNameController";

export const routes = Router();

routes.get("/", (req, res) => res.send({ message: "ok" }));

// --- CATEGORY ROUTES ---

const createCategoryController = new CreateCategoryController();
routes.post("/category", createCategoryController.handle);

const listAllCategoryController = new ListAllCategoryController();
routes.get("/category", listAllCategoryController.handle);

// --- CONTENT ROUTES ---

const createContentController = new CreateContentController();
routes.post("/content", createContentController.handle);

const listAllContentController = new ListAllContentController();
routes.get("/content", listAllContentController.handle);

const listContentByCategoryName = new ListContentByCategoryNameController();
routes.get("/content-category/:name", listContentByCategoryName.handle);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
const multer_1 = __importDefault(require("multer"));
const parser = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (request, file, callback) => {
            callback(null, "public/upload");
        },
        filename: (request, file, callback) => {
            callback(null, Date.now().toString() + "_" + file.originalname);
        },
    }),
    fileFilter: (request, file, callback) => {
        const availableExtension = ["image/png", "image/jpg", "image/jpeg"];
        const isAccepted = availableExtension.find((accepted) => accepted == file.mimetype);
        if (isAccepted) {
            return callback(null, true);
        }
        return callback(null, false);
    },
});
exports.parser = parser;

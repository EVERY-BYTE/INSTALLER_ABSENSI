"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllTokoSchema = exports.findOneTokoSchema = exports.deleteTokoSchema = exports.updateTokoSchema = exports.createTokoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTokoSchema = joi_1.default.object({
    tokoName: joi_1.default.string().max(100).required(),
    tokoLongitude: joi_1.default.string().max(100).required(),
    tokoLatitude: joi_1.default.string().max(100).required(),
    createdAt: joi_1.default.date().optional()
});
exports.updateTokoSchema = joi_1.default.object({
    tokoId: joi_1.default.number().integer().positive().required(),
    tokoName: joi_1.default.string().max(100).optional(),
    tokoLongitude: joi_1.default.string().max(100).optional(),
    tokoLatitude: joi_1.default.string().max(100).optional(),
    updatedAt: joi_1.default.date().optional()
});
exports.deleteTokoSchema = joi_1.default.object({
    tokoId: joi_1.default.number().integer().positive().required()
});
exports.findOneTokoSchema = joi_1.default.object({
    tokoId: joi_1.default.number().integer().positive().required()
});
exports.findAllTokoSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().optional(),
    pagination: joi_1.default.boolean().optional()
});

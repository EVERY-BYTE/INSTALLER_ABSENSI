"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllSuppliersSchema = exports.findOneSupplierSchema = exports.deleteSupplierSchema = exports.updateSupplierSchema = exports.createSupplierSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const jwtPayloadSchema_1 = require("./jwtPayloadSchema");
exports.createSupplierSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    supplierName: joi_1.default.string().max(100).required(),
    supplierContact: joi_1.default.string().max(100).optional(),
    createdAt: joi_1.default.date().optional()
});
exports.updateSupplierSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    supplierId: joi_1.default.number().integer().positive().required(),
    supplierName: joi_1.default.string().max(100).optional(),
    supplierContact: joi_1.default.string().max(100).optional(),
    updatedAt: joi_1.default.date().optional()
});
exports.deleteSupplierSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    supplierId: joi_1.default.number().integer().positive().required()
});
exports.findOneSupplierSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    supplierId: joi_1.default.number().integer().positive().required()
});
exports.findAllSuppliersSchema = joi_1.default.object({
    jwtPayload: jwtPayloadSchema_1.jwtPayloadSchema,
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});

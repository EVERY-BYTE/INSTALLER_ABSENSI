"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtPayloadSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.jwtPayloadSchema = joi_1.default.object({
    storeName: joi_1.default.string().max(100).required(),
    storeAddress: joi_1.default.string().required(),
    storeLongitude: joi_1.default.string().max(100).required(),
    storeLatitude: joi_1.default.string().max(100).required(),
    createdAt: joi_1.default.date().optional()
});

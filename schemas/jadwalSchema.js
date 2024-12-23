"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllJadwalSchema = exports.findOneJadwalSchema = exports.deleteJadwalSchema = exports.updateJadwalSchema = exports.createJadwalSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createJadwalSchema = joi_1.default.object({
    jadwalName: joi_1.default.string().max(100).required(), // Validasi nama jadwal
    jadwalDescription: joi_1.default.string().required(), // Validasi deskripsi jadwal
    jadwalTokoId: joi_1.default.number().integer().positive().required(), // Foreign key ke Toko
    jadwalUserId: joi_1.default.number().integer().positive().required(),
    jadwalStartDate: joi_1.default.date().optional(), // Tanggal mulai opsional
    jadwalEndDate: joi_1.default.date().optional(), // Tanggal selesai opsional
    jadwalStatus: joi_1.default.string().valid('waiting', 'checkin', 'checkout').optional(), // Status dengan pilihan tertentu
    createdAt: joi_1.default.date().optional()
});
exports.updateJadwalSchema = joi_1.default.object({
    jadwalId: joi_1.default.number().integer().positive().required(), // ID wajib untuk update
    jadwalName: joi_1.default.string().max(100).optional(),
    jadwalDescription: joi_1.default.string().optional(),
    jadwalTokoId: joi_1.default.number().integer().positive().optional(),
    jadwalUserId: joi_1.default.number().integer().positive().optional(),
    jadwalStartDate: joi_1.default.date().optional(),
    jadwalEndDate: joi_1.default.date().optional(),
    jadwalStatus: joi_1.default.string().valid('waiting', 'checkin', 'checkout').optional(),
    updatedAt: joi_1.default.date().optional()
});
exports.deleteJadwalSchema = joi_1.default.object({
    jadwalId: joi_1.default.number().integer().positive().required() // Wajib untuk menghapus
});
exports.findOneJadwalSchema = joi_1.default.object({
    jadwalId: joi_1.default.number().integer().positive().required()
});
exports.findAllJadwalSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().optional(),
    pagination: joi_1.default.boolean().optional()
});

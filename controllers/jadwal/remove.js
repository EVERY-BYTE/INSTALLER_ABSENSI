"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeJadwal = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const logger_1 = __importDefault(require("../../utilities/logger"));
const jadwalSchema_1 = require("../../schemas/jadwalSchema");
const jadwal_1 = require("../../models/jadwal");
const removeJadwal = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(jadwalSchema_1.deleteJadwalSchema, req.params);
    if (error != null) {
        const message = `Invalid request parameters! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const result = await jadwal_1.JadwalModel.findOne({
            where: {
                deleted: 0,
                jadwalId: value.jadwalId
            }
        });
        if (result == null) {
            const message = `Jadwal not found with ID: ${value.jadwalId}`;
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error(message));
        }
        result.deleted = 1;
        void result.save();
        const response = response_1.ResponseData.success({ message: 'Jadwal deleted successfully' });
        logger_1.default.info('Jadwal deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.removeJadwal = removeJadwal;

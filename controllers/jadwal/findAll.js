"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllJadwal = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const logger_1 = __importDefault(require("../../utilities/logger"));
const pagination_1 = require("../../utilities/pagination");
const jadwalSchema_1 = require("../../schemas/jadwalSchema");
const jadwal_1 = require("../../models/jadwal");
const tokoModel_1 = require("../../models/tokoModel");
const findAllJadwal = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(jadwalSchema_1.findAllJadwalSchema, req.query);
    if (error != null) {
        const message = `Invalid request query! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const { page: queryPage, size: querySize, pagination } = value;
        const page = new pagination_1.Pagination(parseInt(queryPage) ?? 0, parseInt(querySize) ?? 10);
        const result = await jadwal_1.JadwalModel.findAndCountAll({
            where: {
                deleted: 0
                // ...(Boolean(req.query.search) && {
                //   [Op.or]: [{ : { [Op.like]: `%${search}%` } }]
                // })
            },
            include: {
                model: tokoModel_1.TokoModel,
                as: 'toko'
            },
            order: [['jadwalId', 'desc']],
            ...(pagination === 'true' && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.success(result);
        response.data = page.formatData(result);
        logger_1.default.info('Jadwal retrieved successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.findAllJadwal = findAllJadwal;

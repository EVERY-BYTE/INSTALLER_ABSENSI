"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllAttendance = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const logger_1 = __importDefault(require("../../utilities/logger"));
const pagination_1 = require("../../utilities/pagination");
const scheduleSchema_1 = require("../../schemas/scheduleSchema");
const scheduleModel_1 = require("../../models/scheduleModel");
const storeModel_1 = require("../../models/storeModel");
const sequelize_1 = require("sequelize");
const user_1 = require("../../models/user");
const findAllAttendance = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(scheduleSchema_1.findAllScheduleSchema, req.query);
    if (error != null) {
        const message = `Invalid request query! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const { page: queryPage, size: querySize, pagination, search } = value;
        const page = new pagination_1.Pagination(parseInt(queryPage) ?? 0, parseInt(querySize) ?? 10);
        const result = await scheduleModel_1.ScheduleModel.findAndCountAll({
            where: {
                deleted: 0,
                ...(Boolean(search) && {
                    [sequelize_1.Op.or]: [{ scheduleName: { [sequelize_1.Op.like]: `%${search}%` } }]
                }),
                [sequelize_1.Op.or]: [{ scheduleStatus: 'checkin' }, { scheduleStatus: 'checkout' }]
            },
            include: [
                {
                    model: storeModel_1.StoreModel,
                    as: 'store',
                    attributes: [
                        'storeId',
                        'storeName',
                        'storeAddress',
                        'storeLongitude',
                        'storeLatitude'
                    ]
                },
                {
                    model: user_1.UserModel,
                    as: 'user',
                    attributes: ['userId', 'userName', 'userRole', 'userDeviceId', 'userContact']
                }
            ],
            order: [['scheduleId', 'desc']],
            ...(pagination === true && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.success(result);
        response.data = page.formatData(result);
        logger_1.default.info('Schedule retrieved successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.findAllAttendance = findAllAttendance;

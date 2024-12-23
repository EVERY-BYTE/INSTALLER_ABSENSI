"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendance = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const logger_1 = __importDefault(require("../../utilities/logger"));
const attendanceSchema_1 = require("../../schemas/attendanceSchema");
const scheduleModel_1 = require("../../models/scheduleModel");
const attendance = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(attendanceSchema_1.updateAttendanceSchema, {
        ...req.body
    });
    if (error != null) {
        const message = `Invalid request body! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const scheduleRecord = await scheduleModel_1.ScheduleModel.findOne({
            where: { deleted: 0, scheduleId: value.attendanceId }
        });
        if (!scheduleRecord) {
            const message = 'Attendance record not found';
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error(message));
        }
        // Determine the next status based on the current scheduleStatus
        let newStatus = null;
        if (scheduleRecord.scheduleStatus === 'waiting') {
            newStatus = 'checkin';
        }
        else if (scheduleRecord.scheduleStatus === 'checkin') {
            newStatus = 'checkout';
        }
        if (!newStatus) {
            const message = 'Invalid status transition';
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
        }
        // Update jadwal status to the new status
        await scheduleModel_1.ScheduleModel.update({ ...value, scheduleStatus: newStatus }, {
            where: { deleted: 0, scheduleId: value.attendanceId }
        });
        const response = response_1.ResponseData.success({
            message: `Attendance updated to ${newStatus} successfully`
        });
        logger_1.default.info(`Attendance updated to ${newStatus} successfully`);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.attendance = attendance;

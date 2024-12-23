"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceController = void 0;
const attendance_1 = require("./attendance");
const findAll_1 = require("./findAll");
exports.attendanceController = {
    attendance: attendance_1.attendance,
    findAllAttendance: findAll_1.findAllAttendance
};

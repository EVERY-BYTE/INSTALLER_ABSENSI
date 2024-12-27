"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceHistoryModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.AttendanceHistoryModel = index_1.sequelize.define('AttendanceHistory', {
    ...zygote_1.ZygoteModel,
    attendanceHistoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    attendanceHistoryUserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    attendanceHistoryTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    attendanceHistoryCategory: {
        type: sequelize_1.DataTypes.ENUM('checkin', 'checkout', 'outside'),
        allowNull: false
    }
}, {
    tableName: 'attendance_histories',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

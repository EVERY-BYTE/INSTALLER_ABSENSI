"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokoModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.TokoModel = index_1.sequelize.define('Toko', {
    ...zygote_1.ZygoteModel,
    tokoId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    tokoName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    tokoLongitude: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    tokoLatitude: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'toko',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

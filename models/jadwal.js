"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JadwalModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
const tokoModel_1 = require("./tokoModel");
exports.JadwalModel = index_1.sequelize.define('Jadwal', {
    ...zygote_1.ZygoteModel,
    jadwalId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    jadwalName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    jadwalDescription: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    jadwalTokoId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'Toko', // Relasi dengan model Toko
            key: 'tokoId'
        }
    },
    jadwalUserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    jadwalStartDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    jadwalEndDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    jadwalStatus: {
        type: sequelize_1.DataTypes.ENUM('waiting', 'checkin', 'checkout'),
        allowNull: true,
        defaultValue: 'waiting'
    }
}, {
    tableName: 'jadwal',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
// Relasi One-to-One antara Jadwal dan Toko
exports.JadwalModel.belongsTo(tokoModel_1.TokoModel, { foreignKey: 'jadwalTokoId', as: 'toko' });
tokoModel_1.TokoModel.hasOne(exports.JadwalModel, { foreignKey: 'jadwalTokoId', as: 'jadwal' });

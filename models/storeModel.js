"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.StoreModel = index_1.sequelize.define('Stores', {
    ...zygote_1.ZygoteModel,
    storeId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    storeName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    storeAddress: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    storeLongitude: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    storeLatitude: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'stores',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

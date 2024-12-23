"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.SupplierModel = index_1.sequelize.define('Suppliers', {
    ...zygote_1.ZygoteModel,
    supplierId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    supplierName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    supplierContact: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'suppliers',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

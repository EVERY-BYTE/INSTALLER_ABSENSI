"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierController = void 0;
const find_1 = require("./find");
const findSpg_1 = require("./findSpg");
exports.supplierController = {
    findAll: find_1.findAllSupplier,
    findSpg: findSpg_1.findAllSpg
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jadwalControllers = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findOne_1 = require("./findOne");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.jadwalControllers = {
    findAll: findAll_1.findAllJadwal,
    findOne: findOne_1.findOneJadwal,
    create: create_1.createJadwal,
    update: update_1.updateJadwal,
    remove: remove_1.removeJadwal
};

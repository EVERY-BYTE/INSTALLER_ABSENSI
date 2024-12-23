"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokoControllers = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findOne_1 = require("./findOne");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.tokoControllers = {
    findAll: findAll_1.findAllToko,
    findOne: findOne_1.findOneToko,
    create: create_1.createToko,
    update: update_1.updateToko,
    remove: remove_1.removeToko
};

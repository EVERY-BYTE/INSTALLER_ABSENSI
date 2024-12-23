"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
const spg_1 = require("../../controllers/spg");
const router = (0, express_1.Router)();
router.get('/', middlewares_1.middleware.useAuthorization, spg_1.spgController.findAll);
router.get('/detail/:spgId', middlewares_1.middleware.useAuthorization, spg_1.spgController.findOne);
exports.default = router;

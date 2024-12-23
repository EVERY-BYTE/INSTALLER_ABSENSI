"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const middlewares_1 = require("../../middlewares");
const supplier_1 = require("../../controllers/supplier");
const router = (0, express_1.Router)();
router.get('/', supplier_1.supplierController.findAll);
router.get('/spg', middlewares_1.middleware.useAuthorization, supplier_1.supplierController.findSpg);
exports.default = router;

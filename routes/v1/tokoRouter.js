"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const toko_1 = require("../../controllers/toko");
const router = (0, express_1.Router)();
router.get('/', toko_1.tokoControllers.findAll);
router.get('/detail/:tokoId', toko_1.tokoControllers.findOne);
router.post('/', toko_1.tokoControllers.create);
router.put('/', toko_1.tokoControllers.update);
router.delete('/:tokoId', toko_1.tokoControllers.remove);
exports.default = router;

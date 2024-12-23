"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const jadwal_1 = require("../../controllers/jadwal");
const router = (0, express_1.Router)();
router.get('/', jadwal_1.jadwalControllers.findAll);
router.get('/detail/:jadwalId', jadwal_1.jadwalControllers.findOne);
router.post('/', jadwal_1.jadwalControllers.create);
router.put('/', jadwal_1.jadwalControllers.update);
router.delete('/:jadwalId', jadwal_1.jadwalControllers.remove);
exports.default = router;

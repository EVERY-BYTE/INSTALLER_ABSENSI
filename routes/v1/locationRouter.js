"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const location_1 = require("../../controllers/location");
const router = (0, express_1.Router)();
router.get('/', location_1.locationController.findAllAttendance);
exports.default = router;

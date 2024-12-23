"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const controllers_1 = require("../../controllers");
const userRouter_1 = __importDefault(require("./userRouter"));
const myProfileRouter_1 = __importDefault(require("./myProfileRouter"));
const scheduleRouter_1 = __importDefault(require("./scheduleRouter"));
const supplierRouter_1 = __importDefault(require("./supplierRouter"));
const storeRouter_1 = __importDefault(require("./storeRouter"));
const attendanceRouter_1 = __importDefault(require("./attendanceRouter"));
const statisticRouter_1 = __importDefault(require("./statisticRouter"));
const spgRouter_1 = __importDefault(require("./spgRouter"));
const locationRouter_1 = __importDefault(require("./locationRouter"));
const uploadFileRouter_1 = __importDefault(require("./uploadFileRouter"));
const appRouterV1 = (app) => {
    app.get('/api/v1', async (req, res) => await (0, controllers_1.index)(req, res));
    app.use('/api/v1/users', userRouter_1.default);
    app.use('/api/v1/schedules', scheduleRouter_1.default);
    app.use('/api/v1/suppliers', supplierRouter_1.default);
    app.use('/api/v1/my-profile', myProfileRouter_1.default);
    app.use('/api/v1/stores', storeRouter_1.default);
    app.use('/api/v1/attendances', attendanceRouter_1.default);
    app.use('/api/v1/statistic', statisticRouter_1.default);
    app.use('/api/v1/spg', spgRouter_1.default);
    app.use('/api/v1/locations', locationRouter_1.default);
    app.use('/api/v1/files', uploadFileRouter_1.default);
};
exports.appRouterV1 = appRouterV1;

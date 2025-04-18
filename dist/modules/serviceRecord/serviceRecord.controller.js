"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordController = void 0;
const catchAsync_1 = __importDefault(require("../../app/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../app/utils/sendResponse"));
const serviceRecord_service_1 = require("./serviceRecord.service");
const http_status_1 = __importDefault(require("http-status"));
const createServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordService.createServiceRecordInToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result
    });
}));
const getAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordService.getAllServicesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service records fetched successfully",
        data: result
    });
}));
const getServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const serviceRecord = yield serviceRecord_service_1.ServiceRecordService.getServiceRecordByIDFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service record fetched successfully',
        data: serviceRecord
    });
}));
const completedServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const serviceRecord = yield serviceRecord_service_1.ServiceRecordService.completedServiceRecordByIDInToDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: serviceRecord
    });
}));
const updateServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const serviceRecord = yield serviceRecord_service_1.ServiceRecordService.updateServiceRecordByIDInToDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service Record Updated",
        data: serviceRecord
    });
}));
const overDueServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordService.overDueServicesRecordFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    });
}));
exports.ServiceRecordController = {
    createServiceRecord,
    getAllServices,
    getServiceRecord,
    completedServiceRecord,
    updateServiceRecord,
    overDueServices
};

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
exports.BikesController = void 0;
const catchAsync_1 = __importDefault(require("../../app/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../app/utils/sendResponse"));
const bike_service_1 = require("./bike.service");
const http_status_1 = __importDefault(require("http-status"));
// Create a new bike
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.BikesService.createBikeInToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result
    });
}));
// Get All Bikes
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield bike_service_1.BikesService.getAllBikesFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bikes fetched successfully',
        data: bikes
    });
}));
// Get Bike By ID
const getBikeByID = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const bike = yield bike_service_1.BikesService.getBikeByIDFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Bike fetched successfully",
        data: bike
    });
}));
exports.BikesController = {
    createBike,
    getAllBikes,
    getBikeByID,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../app/middlewares/validateRequest");
const bike_validate_1 = require("./bike.validate");
const bike_controller_1 = require("./bike.controller");
const router = express_1.default.Router();
// creaste new Bike
router.post('/', (0, validateRequest_1.validateRequest)(bike_validate_1.BikesValidationSchema.CreateBikeZodSchema), bike_controller_1.BikesController.createBike);
// Get all Bikes
router.get('/', bike_controller_1.BikesController.getAllBikes);
// Get a specific bike by ID
router.get('/:id', bike_controller_1.BikesController.getBikeByID);
exports.BikeRoutes = router;

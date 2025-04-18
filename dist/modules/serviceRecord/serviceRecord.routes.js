"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../app/middlewares/validateRequest");
const serviceRecord_validate_1 = require("./serviceRecord.validate");
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const router = express_1.default.Router();
// creaste new Bike
router.post('/', (0, validateRequest_1.validateRequest)(serviceRecord_validate_1.ServiceRecordValidate.createServiceZodSchema), serviceRecord_controller_1.ServiceRecordController.createServiceRecord);
// Get All Service Record 
router.get('/', serviceRecord_controller_1.ServiceRecordController.getAllServices);
// Pending or Overdue Services (older than 7 days)
router.get('/status', serviceRecord_controller_1.ServiceRecordController.overDueServices);
// Get Service Record by Id
router.get('/:id', serviceRecord_controller_1.ServiceRecordController.getServiceRecord);
// Completed Service Record
router.put('/:id/complete', serviceRecord_controller_1.ServiceRecordController.completedServiceRecord);
// update service Record
router.patch('/:id', serviceRecord_controller_1.ServiceRecordController.updateServiceRecord);
exports.ServiceRecordRoutes = router;

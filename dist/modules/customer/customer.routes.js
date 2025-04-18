"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const customer_validate_1 = require("./customer.validate");
const validateRequest_1 = require("../../app/middlewares/validateRequest");
const router = express_1.default.Router();
// creaste new customer
router.post('/', (0, validateRequest_1.validateRequest)(customer_validate_1.CustomerValidationSchema.createCustomerSchema), customer_controller_1.CustomersController.createCustomer);
// Get all Customer
router.get('/', customer_controller_1.CustomersController.getAllCustomers);
// Get a specific customer by ID
router.get('/:id', customer_controller_1.CustomersController.getCutomerByID);
// Update customer details
router.put('/:id', (0, validateRequest_1.validateRequest)(customer_validate_1.CustomerValidationSchema.updateCustomerZodSchema), customer_controller_1.CustomersController.updateCustomer);
// Delete customer
router.delete('/:id', customer_controller_1.CustomersController.deleteCustomer);
exports.CoustomerRoutes = router;

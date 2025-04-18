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
exports.CustomersController = void 0;
const catchAsync_1 = __importDefault(require("../../app/utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../app/utils/sendResponse"));
const customer_service_1 = require("./customer.service");
const http_status_1 = __importDefault(require("http-status"));
// Create a new customer
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerService.createCustomerInToDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Customer created successfully',
        data: result
    });
}));
// Get All Customer
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_service_1.CustomerService.getAllCustomersFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: customers
    });
}));
// Get Customer By ID
const getCutomerByID = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const customer = yield customer_service_1.CustomerService.getCustomerByIDFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer fetched successfully',
        data: customer
    });
}));
// Update Customer Data
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedCustomer = yield customer_service_1.CustomerService.updateCustomerInToDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Customer updated successfully',
        data: updatedCustomer,
    });
}));
// Delete Customer data
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedCustomer = yield customer_service_1.CustomerService.deleteCustomerFromDB(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Customer deleted successfully"
    });
}));
exports.CustomersController = {
    createCustomer,
    getAllCustomers,
    getCutomerByID,
    updateCustomer,
    deleteCustomer
};

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
exports.CustomerService = void 0;
const prisma_1 = __importDefault(require("../../app/utils/prisma"));
// Create customer into DB 
const createCustomerInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone } = payload;
    const customer = yield prisma_1.default.customer.create({
        data: {
            name,
            email,
            phone,
        },
    });
    return customer;
});
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma_1.default.customer.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return customers;
});
const getCustomerByIDFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.findUniqueOrThrow({
        where: {
            customerId: id
        },
    });
    return customer;
});
const updateCustomerInToDB = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.update({
        where: {
            customerId
        },
        data: payload,
    });
    return customer;
});
// delete customer data
const deleteCustomerFromDB = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma_1.default.customer.delete({
        where: {
            customerId
        },
    });
    return customer;
});
exports.CustomerService = {
    createCustomerInToDB,
    getAllCustomersFromDB,
    getCustomerByIDFromDB,
    updateCustomerInToDB,
    deleteCustomerFromDB
};

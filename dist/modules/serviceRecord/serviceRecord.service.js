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
exports.ServiceRecordService = void 0;
const prisma_1 = __importDefault(require("../../app/utils/prisma"));
const date_fns_1 = require("date-fns");
const createServiceRecordInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = payload;
    const isBikeExist = yield prisma_1.default.bike.findUniqueOrThrow({
        where: {
            bikeId
        }
    });
    if (!isBikeExist) {
        throw new Error("Bike Not Found");
    }
    const service = yield prisma_1.default.serviceRecord.create({
        data: payload
    });
    return service;
});
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany({});
    return result;
});
const getServiceRecordByIDFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecord = yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId
        },
    });
    return serviceRecord;
});
const completedServiceRecordByIDInToDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            completionDate: new Date(),
            status: 'done'
        }
    });
    return result;
});
const updateServiceRecordByIDInToDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            status: 'in-progress'
        }
    });
    return result;
});
const overDueServicesRecordFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const overDueServiceRecord = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in-progress']
            },
            serviceDate: {
                lt: sevenDaysAgo,
            }
        },
        orderBy: {
            serviceDate: 'asc'
        }
    });
    return overDueServiceRecord;
});
exports.ServiceRecordService = {
    createServiceRecordInToDB,
    getAllServicesFromDB,
    getServiceRecordByIDFromDB,
    completedServiceRecordByIDInToDB,
    updateServiceRecordByIDInToDB,
    overDueServicesRecordFromDB
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordValidate = exports.createServiceZodSchema = void 0;
const zod_1 = require("zod");
exports.createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({
            required_error: 'Bike ID is required',
        }).uuid('Bike ID must be a valid UUID'),
        serviceDate: zod_1.z.string({
            required_error: 'Service date is required',
        }).datetime('Service date must be a valid ISO datetime string'),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }).min(1, 'Description cannot be empty'),
        status: zod_1.z.enum(['pending', 'in-progress', 'done'], {
            required_error: 'Status is required',
            invalid_type_error: 'Status must be one of: pending, in-progress, or done',
        }),
    }),
});
exports.ServiceRecordValidate = {
    createServiceZodSchema: exports.createServiceZodSchema
};

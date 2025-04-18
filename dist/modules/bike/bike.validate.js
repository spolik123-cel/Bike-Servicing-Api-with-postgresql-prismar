"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesValidationSchema = void 0;
const zod_1 = require("zod");
const CreateBikeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, 'Brand is required'),
        model: zod_1.z.string().min(1, 'Model is required'),
        year: zod_1.z
            .number({
            required_error: 'Year is required',
            invalid_type_error: 'Year must be a number',
        })
            .int()
            .min(1900, 'Year must be valid'),
        customerId: zod_1.z
            .string()
            .uuid('Customer ID must be a valid UUID'),
    })
});
exports.BikesValidationSchema = {
    CreateBikeZodSchema,
    // updateCustomerZodSchema
};

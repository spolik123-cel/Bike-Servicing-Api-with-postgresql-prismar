
import { z } from 'zod';

export const createServiceZodSchema = z.object({
  body: z.object({
    bikeId: z.string({
      required_error: 'Bike ID is required',
    }).uuid('Bike ID must be a valid UUID'),

    serviceDate: z.string({
      required_error: 'Service date is required',
    }).datetime('Service date must be a valid ISO datetime string'),

    description: z.string({
      required_error: 'Description is required',
    }).min(1, 'Description cannot be empty'),

    status: z.enum(['pending', 'in-progress', 'done'], {
      required_error: 'Status is required',
      invalid_type_error: 'Status must be one of: pending, in-progress, or done',
    }),
  }),
});



export const ServiceRecordValidate =  {
    createServiceZodSchema
}
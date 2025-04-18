import { z } from 'zod';

const CreateBikeZodSchema = z.object({
   body:z.object({
    brand: z.string().min(1, 'Brand is required'),
    model: z.string().min(1, 'Model is required'),
    year: z
      .number({
        required_error: 'Year is required',
        invalid_type_error: 'Year must be a number',
      })
      .int()
      .min(1900, 'Year must be valid'),
    customerId: z
      .string()
      .uuid('Customer ID must be a valid UUID'),
   })
  });


export const BikesValidationSchema = {
    CreateBikeZodSchema,
    // updateCustomerZodSchema
}

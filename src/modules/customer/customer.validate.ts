import { z } from 'zod';

const createCustomerSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email format'),
    phone: z.string({ required_error: 'Phone is required' }),
  }),
});

const updateCustomerZodSchema = z
  .object({
    body:z.object({
      name: z.string().optional(),
      email: z.string().email('Invalid email format').optional(),
      phone: z.string().optional(),
    })
    .refine((data) => data.name || data.email || data.phone, {
      message: 'At least one field (name, email, or phone) must be provided',
    })
  })

export const CustomerValidationSchema = {
    createCustomerSchema,
    updateCustomerZodSchema
}

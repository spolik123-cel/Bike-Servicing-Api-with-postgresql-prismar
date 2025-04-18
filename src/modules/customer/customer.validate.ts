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


export const CustomerValidationSchema = {
    createCustomerSchema
}

import express  from 'express';
import { z } from 'zod';
import { CustomersController } from './customer.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { CustomerValidationSchema } from './customer.validate';

const router = express.Router();

// creaste new customer
router.post('/',
    validateRequest(CustomerValidationSchema.createCustomerSchema),
    CustomersController.createCustomer
)




export const CoustomerRoutes = router
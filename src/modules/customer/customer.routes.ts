import express  from 'express';
import { CustomersController } from './customer.controller';
import { CustomerValidationSchema } from './customer.validate';
import { validateRequest } from '../../app/middlewares/validateRequest';

const router = express.Router();

// creaste new customer
router.post('/',
    validateRequest(CustomerValidationSchema.createCustomerSchema),
    CustomersController.createCustomer
)




export const CoustomerRoutes = router
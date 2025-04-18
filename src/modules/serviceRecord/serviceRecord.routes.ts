import express  from 'express';
import { validateRequest } from '../../app/middlewares/validateRequest';
import { ServiceRecordValidate } from './serviceRecord.validate';
import { ServiceRecordController } from './serviceRecord.controller';
const router = express.Router();

// creaste new Bike
router.post('/',
    validateRequest(ServiceRecordValidate.createServiceZodSchema),
    ServiceRecordController.createServiceRecord
)


export const ServiceRecordRoutes = router
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

// Get All Service Record 
router.get('/',ServiceRecordController.getAllServices)

// Pending or Overdue Services (older than 7 days)
router.get('/status',ServiceRecordController.overDueServices)

// Get Service Record by Id
router.get('/:id',ServiceRecordController.getServiceRecord)

// Completed Service Record
router.put('/:id/complete',ServiceRecordController.completedServiceRecord)


// update service Record
router.patch('/:id',ServiceRecordController.updateServiceRecord)



export const ServiceRecordRoutes = router
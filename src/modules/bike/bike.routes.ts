import express  from 'express';
import { validateRequest } from '../../app/middlewares/validateRequest';
import { BikesValidationSchema } from './bike.validate';
import { BikesController } from './bike.controller';

const router = express.Router();

// creaste new Bike
router.post('/',
    validateRequest(BikesValidationSchema.CreateBikeZodSchema),
    BikesController.createBike
)

// Get all Bikes
router.get('/', BikesController.getAllBikes);

// Get a specific bike by ID
router.get('/:id',BikesController.getBikeByID)


export const BikeRoutes = router
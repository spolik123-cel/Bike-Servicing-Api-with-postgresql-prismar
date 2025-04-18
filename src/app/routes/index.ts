import { Router } from 'express';
import { CoustomerRoutes } from '../../modules/customer/customer.routes';
import { BikeRoutes } from '../../modules/bike/bike.routes';
import { ServiceRecordRoutes } from '../../modules/serviceRecord/serviceRecord.routes';


const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CoustomerRoutes,
  },
  {
    path:'/bikes',
    route:BikeRoutes
  },
  {
    path:'/services',
    route:ServiceRecordRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from 'express';
import { CoustomerRoutes } from '../../modules/customer/customer.routes';
import { BikeRoutes } from '../../modules/bike/bike.routes';


const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CoustomerRoutes,
  },
  {
    path:'/bikes',
    route:BikeRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

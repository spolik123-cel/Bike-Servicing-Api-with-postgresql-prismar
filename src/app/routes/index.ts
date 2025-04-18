import { Router } from 'express';
import { CoustomerRoutes } from '../../modules/customer/customer.routes';


const router = Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CoustomerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

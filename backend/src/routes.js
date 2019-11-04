import { Router } from 'express';

import UserController from '~/app/controllers/UserController';
import SessionController from '~/app/controllers/SessionController';
import StudentController from '~/app/controllers/StudentController';
import PlanController from '~/app/controllers/PlanController';

import authMiddleware from '~/app/middleware/auth';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    name: 'Gympoint api',
    version: '1.0.0',
  });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);
routes.get('/students/:studentId', StudentController.show);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.delete('/plans/:id', PlanController.delete);
routes.put('/plans/:id', PlanController.update);

export default routes;

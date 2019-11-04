import { Router } from 'express';

import UserController from '~/app/controllers/UserController';
import SessionController from '~/app/controllers/SessionController';
import StudentController from '~/app/controllers/StudentController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    name: 'Gympoint api',
    version: '1.0.0',
  });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/students', StudentController.store);

export default routes;

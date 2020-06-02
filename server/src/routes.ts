import express from 'express';
import PointController from './controllers/PointController';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();

routes.get('/items', ItemsControllers.index);

routes.post('/points', PointController.store);
routes.get('/points/:id', PointController.show);
routes.get('/points', PointController.index);

export default routes;

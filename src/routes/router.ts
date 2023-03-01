import { Router } from 'express';
import * as controller from '../controllers.ts/controller';

const router = Router();

router.get('/taskAll', controller.taskAll);
router.post('/taskCreate', controller.taskCreate);
router.put('/taskUpdate/:id', controller.taskUpdate);
router.delete('/taskDelete/:id', controller.taskDelete);

export default router;
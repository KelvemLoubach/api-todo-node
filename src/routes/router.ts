import { Router } from 'express';
import * as controller from '../controllers.ts/controller';

const router = Router();

//router.get('/ping', controller.pong);

router.get('/taskAll', controller.taskAll);
router.post('/taskCreate', controller.taskCreat);
// router.put('/taskUpdate', controller.taskUpdate);
// router.delete('/taskDelete', controller.taskDelete);


export default router;
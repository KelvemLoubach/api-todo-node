import { Router } from 'express';
import * as controller from '../controllers.ts/controller';

const router = Router();

router.use('/', controller.home);

export default router;
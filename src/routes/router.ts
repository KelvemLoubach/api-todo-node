import { Router } from 'express';
import * as controller from '../controllers.ts/controller';
import multer from 'multer';

const upload = multer({
    dest: './tmp'
});

const router = Router();

router.get('/taskAll', controller.taskAll);
router.post('/taskCreate', controller.taskCreate);
router.put('/taskUpdate/:id', controller.taskUpdate);
router.delete('/taskDelete/:id', controller.taskDelete);
router.post('/taskUpload', upload.fields([
    {name: 'avatars',maxCount: 2},
    {name: 'gallery', maxCount: 2}
]), controller.uploadFile);

export default router;
import { Router } from 'express';
import * as controller from '../controllers.ts/controller';
import multer, { memoryStorage } from 'multer';

// const storageConfig = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null, './tmp')
//     },
//     filename: (req,file,cb)=>{
//         let randomNumber = Math.floor(Math.random()*9999999);
//         cb(null, `${randomNumber+' '+Date.now()}`);
//     }
// })

const upload = multer({
    dest: './tmp',

    fileFilter: (req ,file, cb)=>{

        const verifTypeImg: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

      //callback -- verificando com o método includes() se em file.mimetype existe um arquivo .jpg, jpeg, png ou webp.
        if(!verifTypeImg.includes(file.mimetype)){
            cb(new Error('Arquivo inválido!')) 
            cb(null,false)   
        } else {
            cb(null, true)
        } 
    }
});

const router = Router();

router.get('/taskAll', controller.taskAll);
router.post('/taskCreate', controller.taskCreate);
router.put('/taskUpdate/:id', controller.taskUpdate);
router.delete('/taskDelete/:id', controller.taskDelete);
router.post('/taskUpload', upload.single('teste'), controller.uploadFile);

export default router;
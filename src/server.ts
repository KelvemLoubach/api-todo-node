import express, { urlencoded, ErrorRequestHandler, Request, Response } from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/router';
import cors from 'cors';
import { MulterError } from 'multer';

const server = express();
dotenv.config();

server.use(urlencoded({ extended: true }));

server.use(cors({
    origin: '*'
}));

server.use(mainRoutes);

server.use((req:Request,res:Response)=>{
    res.status(404).send('Página não encontrada!');
    res.json({Erro: 'Endpoint não encontrado!'})
});

//Middlaware para tratamentos de erros usando a interface nativa do Express 'ErrorRequestHandler' que define o formato de uma função que lida com erros.
const errorHandler: ErrorRequestHandler = (err, req, res, next)=>{

    res.status(400); //Bad Request

    if(err instanceof MulterError){

        res.json({error: err.code});
        console.log(err)
    } else {
       
        res.json({Teste: err})
    }
}

//Registrando o middleware na instância 'server' do Express.
server.use(errorHandler);

server.listen(process.env.PORT);
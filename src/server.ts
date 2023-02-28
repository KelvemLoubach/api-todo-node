import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/router';
import cors from 'cors'

const server = express();
dotenv.config();

server.use(urlencoded({ extended: true }));

server.use(cors({
    origin: '*'
}));

server.use(mainRoutes);
server.listen(process.env.PORT);
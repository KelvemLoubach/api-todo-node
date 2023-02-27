import express from 'express';
import dotenv from 'dotenv';
import mainRoutes from './routes/router';

const server = express();
dotenv.config();

server.use(mainRoutes);
server.listen(process.env.PORT);
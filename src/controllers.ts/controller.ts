import { Request, Response } from 'express';
import {Todo} from '../models/todo'

// export const pong = (req:Request, res:Response)=>{
//     res.json({pong: 'Pong'})
// }

export const taskAll = async (req:Request, res:Response)=>{
    let task = await Todo.findAll();
    res.json({task})
};

export const taskCreat = async (req:Request, res:Response)=>{
    let { title, done } = req.body;
    let create = await Todo.create({title,done});
    res.json({create});
}
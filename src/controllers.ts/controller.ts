import { Request, Response } from 'express';
import { Todo } from '../models/todo'

export const taskAll = async (req: Request, res: Response) => {
    let task = await Todo.findAll();
    res.json({ task })
};

export const taskCreate = async (req: Request, res: Response) => {
    //Verifica se o campo title existe
    if (req.body.title) {
        let newTask = await Todo.create({
            title: req.body.title,
            //Verifica se o campo done foi preenchido, se sim retorna true caso contrário retorna false
            done: req.body.done ? true : false
        });
        res.status(201).json({ newTask });
    } else {
        res.json({ Error: 'Preencha o título da tarefa!' })
    };
};

export const taskUpdate = async (req: Request, res: Response) => {

    const { id } = req.params;
    let taskById = await Todo.findByPk(id);

    if (taskById) {

        if (req.body.title) {
            taskById.title = req.body.title;
        }

        if (req.body.done) {
            switch (req.body.done.toLowerCase()) {

                case 'true':
                case '1':
                    taskById.done = true;
                    break;

                case 'false':
                case '0':
                    taskById.done = false;
                    break;
            };
        }
        await taskById.save();
        res.status(201).json({ taskById });
    }

    else {
        res.json({ ERRO: 'Tarefa não encontrada!' })
    };
};

export const taskDelete = async (req: Request, res: Response) => {
    let { id } = req.params;

    let deleteTask = await Todo.findByPk(id);

    if (deleteTask) {
        await deleteTask.destroy();
        res.status(201).json({ ok: 'Deletada!' })
    } 
     res.json({ Error: 'Tarefa não encontrada!' }) 
};
import Tasksd from '../models/model';

import { getPagi } from '../pagination/getPagination';

export const tasksav =  async (req, res) => {
    try {
        const {page, size} = req.query;
        const {limit, offset} = getPagi(page,size) 
        console.log(limit + " " + offset);
        const tasksv = await Tasksd.paginate({}, {offset: offset, limit: limit});
        
        res.json(tasksv);        
    } catch (error) {
        res.json({
            "promea":"Ha ocurrido un error en esta parte"
        })
    }

}

export const Taskd = async (req, res) => {
    try {
        const {Title, Description, Done} = req.body;
        const tasks = await new Tasksd({Title, Description, Done});
    
        const tasksa  =await tasks.save();
        res.json(tasksa);
            
    } catch (error) {
        res.json({
            'respuesta': 'Ha ocurrido un error en la aplicacion' 
        })    
    }
    
}

export const findonetas = async (req, res) => {
    try {
        const taskone = await Tasksd.findById(req.params.id);
        await Tasksd.findByIdAndDelete(req.params.id);
        res.json('Esta es tarea');
        console.log(taskone);        
    } catch (error) {
        res.json({
            'respuesta': 'Ha ocurrido un error en la aplicacion' 
        })            
    }

}


export const taskles = async (req, res) => {
    try {
        await Tasksd.findByIdAndDelete(req.params.id);
        res.json('Esta es');
            
    } catch (error) {
        res.json({
            'respuesta': 'Ha ocurrido un error en la aplicacion' 
        })            
    }
}

export const taskrue = async (req, res) => {
    try {
        const taskru = await Tasksd.find({"Title": "este es titulolis"});
        res.json(taskru);        
    } catch (error) {
        res.json({
            'respuesta': 'Ha ocurrido un error en la aplicacion' 
        }) 
    }

}

export const taskod = async (req, res) => {
    try {
        const taskodi = await Tasksd.findByIdAndUpdate(req.params.id, req.body);
    
        res.json({
            "respuetsa": "la tarea esta ya actualizada de manera exitosa"
        });
            
    } catch (error) {
        res.json({
            'respuesta': 'Ha ocurrido un error en la aplicacion' 
        })         
    }

}
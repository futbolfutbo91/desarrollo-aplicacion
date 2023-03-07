import { Router } from 'express';

const router = Router();

import * as tasksav from '../Controlle/taskfind';


router.get('/apirest', (req, res) => {
    res.json({star: "beer is the fjm ersdas vckxlvj ce esd be se ocs ve es li dre esc gjhg csesses"});
});

router.get('/apirest/tasks',tasksav.tasksav);

router.post('/apirest/recibir', tasksav.Taskd);

router.get('/apirest/vertasks/:id', tasksav.findonetas);

router.delete('/apirest/taskb/:id',tasksav.taskles);

router.get('/apirest/taskru', tasksav.taskrue);

router.post('/apirest/taskmom/:id', tasksav.taskod);

export default router;

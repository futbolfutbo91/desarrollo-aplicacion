import express from 'express';
const mongoose = require('mongoose');

import router from './Routes/index';

import './database';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('port', 3000);
console.log(app.get('port'));

app.use(router);

app.listen(app.get('port'), () => {
    console.log('conectado al puerto');
});


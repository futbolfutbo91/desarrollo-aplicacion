const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const varia = mongoose.connect('mongodb://127.0.0.1:27017/apire', {
        useNewUrlParser: true
    }).then(db => console.log('conectado a: '))
    .catch(err => console.log('error: ', err))
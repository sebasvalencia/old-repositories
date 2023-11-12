'use strict';

//vamos a tener la funcionalidad de express
//los require express y bodyParser
//la app

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ecomerce tienda online
//API REST sobre productos
app.use('/api', api);

module.exports = app;

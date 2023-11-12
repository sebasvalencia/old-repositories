'use strict';

//importamos express
const express = require('express');
const bodyParser = require('body-parser');

//Crear el servidor
const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//Respuesta en json

//Añadir las peticiones
//get
//app.get('/url_a_escuchar', devuelve callback)
//en req esta la peticion 
app.get('/hola/:name', (req, res) => {
    res.send({mensaje: `Hola  ${req.params.name}`  });
});








app.listen(port, () =>{
  console.log(`API REST corriendo en http:localhost:${port}`);
})

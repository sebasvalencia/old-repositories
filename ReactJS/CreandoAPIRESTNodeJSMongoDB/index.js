'use strict';

//Fichero principal

//Bus
const mongoose = require('mongoose');

//referencia a la app
const app = require('./app');

//referencia config
const config = require('./config');


//Primero conectamos la bd
//el primer parametro es la bd mongodb://localhost:27017/nombre_bd
//segundo parametro callback
mongoose.connect(config.db, (err, res)=>{
  if(err){
    //throw err;
    return console.log(`Error al conectar a la BD ${err}`);
  }else{
    console.log("Conexion a la BD establecida...");
    app.listen(config.port, () => {
      console.log(`API REST corriendo en http:localhost:${config.port}`);
    });
  }
});


'use strict';

//const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services');

//Funcion para el registro
function signUp(req, res) {
  const user = new User({
    email: req.body.email,
    displayName : req.body.displayName,
    password: req.body.password
  });
  user.save((err) => {
    if(err) res.status(500).send({ message: `Error al crear el usuario: ${err}`});

    //Usamos la funcion createToken q cree un token de un usuario
    return res.status(200).send({ token: service.createToken(user)})
  });
}

//Login
function signIn(req, res) {
  //buscar en la bd q tengan email y si existe creamos token
  User.find({email: req.body.email}, (err, user) => {
    if(err) return res.status(500).send({message:err});
    if(!user) return res.status(404).send({message: `No existe el usuario`});

    req.user = user;
    res.status(200).send({
      message: `Te has logueado correctamente`,
      token: service.createToken(user)
    });

  });
}

module.exports = {
  signUp,
  signIn
}


//para cuando ya esta registrado

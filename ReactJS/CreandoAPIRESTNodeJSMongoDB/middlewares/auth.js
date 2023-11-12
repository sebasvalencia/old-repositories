'use strict';

//const jwt = require('jwt');
//const moment = require('moment');
//const config = require('../config');
const services = require('../services');

function isAuth(req,res, next){

    //si no existe el campo authorization
    if(!req.headers.authorization){
        return res.status(403).send({message: `No tienes autorización`});
    }

    const token = req.headers.authorization.split(" ")[1];//obtenemos la pos 1 del array
    //const payload = jwt.decode(token, config.SECRET_TOKEN);//el conenido en texto decodificado 

    //si ya caduco payload.exp
    /*if(payload.exp <= moment().unix()){
        return res.status(401).send({message: `El token ha expirado`});
    }*/

    //antes de pasarla al controlador final de la ruta
    //req.user = payload.sub;
    //next();
    services.decodeToken(token)
        .then(response => {
            req.user = response;
            next();
        })
        .catch(response =>{
            res.status(response.status);
        });
}

module.exports = isAuth;


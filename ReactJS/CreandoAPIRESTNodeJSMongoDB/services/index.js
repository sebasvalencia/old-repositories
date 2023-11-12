'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
  const payload = {
      sub: user._id,
      iat: moment().unix(),//fechas cuando se createToken
      exp: moment().add(14, 'days').unix(),//cuadno expira, q caduque en 14 dias
  }

  return jwt.encode(payload, config.SECRET_TOKEN);

}

function decodeToken(token){

  //usar promesas nativamente
  //Promise recibe dos parametros resolve: q cuando la promesa se resolvio la funcion
  //rject cuando hay un error
  const decoded = new Promise((resolve, reject)=>{
    try{
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      //si ya caduco payload.exp
      if(payload.exp <= moment().unix()){
        reject({
          status:401,
          message: `El token ha expirado`
        });
      }
      resolve(payload.sub);
  }catch(err){
      reject({
        status:500,
        message: `Invalid token`
      })
    }
  });

  return decoded;
}

module.exports = {
  createToken,
  decodeToken
}  

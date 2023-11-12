'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Utilizar una libreria para las contraseñas
const bcrypt = require('bcrypt-nodejs');

const crypto = require('crypto');

const UserSchema = new Schema({
  email: { type: String, unique:true, lowercase:true },
  displayName: String,
  avatar: String,
  password: {type:String, select:false},
  signupDate: {type:Date, default: Date.now()},
  lasLogin:Date
});

//Funciones q se puede ejecutar antes/despues que el modelo
//se ha ejecutado

UserSchema.pre('save', (next) => {
  let user = this;
  //if(!user.isModified('passwprd')) return next()//si user no ha solicitado su contraseña
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return next(err);

      bcrypt.hash(user.password, salt, null, (err, hash) => {
          if(err) return next(err);

          user.password = hash;
          next();
      });
    });
});

UserSchema.methods.gravatar =function(){
  if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

  //funcion para crear hash,usamos crypto
  const md5 = crypto.createHash('md5').update(this.mail).digest('hex');

  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema);

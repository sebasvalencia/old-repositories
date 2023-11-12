'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name:String,
  picture:String,
  price:{type:Number, default:0},
  category:{type:String, enum:['computers', 'phones', 'accesories']},
  description: String
});

//Exportar el modelo, para q pueda ser accedido por toda la aplicacion
//Nombre y esquema a exportar
module.exports = mongoose.model('Product', ProductSchema);

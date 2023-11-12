'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
  name:String,
  lastName:String,
  age: Number
});

module.exports = mongoose.model('Person', PersonSchema);

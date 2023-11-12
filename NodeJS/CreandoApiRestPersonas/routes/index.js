'use strict';

const express = require('express');
const personCtrl = require('../controllers/person');
const api = express.Router();

api.get('/person', personCtrl.getPersons);
api.get('/person/:personId', personCtrl.getPerson);
api.post('/person', personCtrl.postPerson);
api.put('/person/:personId', personCtrl.putPerson);
api.delete('/person/:personId', personCtrl.deletePerson);


module.exports = api;

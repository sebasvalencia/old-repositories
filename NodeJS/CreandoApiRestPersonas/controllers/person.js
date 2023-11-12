'use strict';

const Person = require('../models/person');

//GET ALL
function getPersons(req, res) {
  Person.find({}, (err, persons) => {
    if(err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
    if(!persons) return res.status(404).send({message:`No existen personas `});
    res.status(200).send({persons: persons});
  });
}

//GET Only one
function getPerson(req, res) {
  let personId = req.params.personId;
  Person.findById(personId, (err, person) => {
    if(err) return res.status(500).send({message:`Error al realizar la petición ${err}`});
    if(!person) return res.status(404).send({message: `La persona no existe`});
    res.status(200).send({person: person});
  });
}

//POST
function postPerson(req, res) {
  let person = Person();
  person.name = req.body.name;
  person.lastName = req.body.lastName;
  person.age = req.body.age;
  person.save((err, personStored) =>{
    if(err){
      res.status(500).send({message:`Error al guardar en la BD ${err}`});
    }else {
      res.status(200).send({person: personStored});
    }
  });
}

//PUT
function putPerson(req, res) {
  let personId = req.params.personId;
  let updateData = req.body;

  Person.findByIdAndUpdate(personId, updateData, (err, personUpdated) => {
    if(err) res.status(500).send({message: `Error al actualizar la persona: ${err}`});

    res.status(200).send({person: personUpdated});

  });
}

//DELETE
function deletePerson(req, res) {
  let personId = req.params.personId;
  Person.findById(personId, (err, person) =>{
    if(err) res.status(500).send({message: `Error al encontrar la persona: ${err}`});
    person.remove(err =>{
      if(err) res.status().send({message: `Error al borrar la persona ${err}`});

      res.status(200).send({message:`La persona ha sido eliminada`});
    });
  });
}

module.exports={
  getPersons,
  getPerson,
  postPerson,
  putPerson,
  deletePerson
}

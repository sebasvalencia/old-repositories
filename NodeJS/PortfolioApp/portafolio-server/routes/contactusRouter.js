var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Contactus = require('../models/contactus');

var contactusRouter = express.Router();
contactusRouter.use(bodyParser.json());

contactusRouter.route('/')
    .get(function (req, res, next) {
        Contactus.find({}, function (err, contactus) {
            if (err) throw err;
            res.json(contactus);
        });
    })

    .post(function (req, res, next) {
        Contactus.create(req.body, function (err, contactus) {
            
console.log('assentServer', contactus);

            if (err) throw err;
            console.log('Contactus created!',req.body);
            var id = contactus._id;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Added the contactus with id: ' + id);
        });
    });

module.exports = contactusRouter;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Liabilities = require('../models/liabilities');

var liabilityRouter = express.Router();
liabilityRouter.use(bodyParser.json());

liabilityRouter.route('/')
    .get(function (req, res, next) {
        Liabilities.find({}, function (err, liability) {
            if (err) throw err;
            res.json(liability);
        });
    })

    .post(function (req, res, next) {
        Liabilities.create(req.body, function (err, liability) {
            if (err) throw err;
            console.log('Liability created!');
            var id = liability._id;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Added the liability with id: ' + id);
        });
    })

    .delete(function (req, res, next) {
        Liabilities.remove({}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

liabilityRouter.route('/:liabilityId')
    .get(function (req, res, next) {
        Liabilities.findById(req.params.liabilityId, function (err, liability) {
            if (err) throw err;
            res.json(liability);
        });
    })

    .put(function (req, res, next) {
        Liabilities.findByIdAndUpdate(req.params.liabilityId, {
            $set: req.body
        }, {
                new: true
            }, function (err, liability) {
                if (err) throw err;
                res.json(liability);
            });
    })

    .delete(function (req, res, next) {
        Liabilities.findByIdAndRemove(req.params.liabilityId, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

module.exports = liabilityRouter;
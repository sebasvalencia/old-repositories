var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Assets = require('../models/assets');

var assetRouter = express.Router();
assetRouter.use(bodyParser.json());

assetRouter.route('/')
    .get(function (req, res, next) {
        Assets.find({}, function (err, asset) {
            if (err) throw err;
            res.json(asset);
        });
    })

    .post(function (req, res, next) {
        Assets.create(req.body, function (err, asset) {
            
console.log('assentServer', asset);

            if (err) throw err;
            console.log('Asset created!',req.body);
            var id = asset._id;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Added the asset with id: ' + id);
        });
    })

    .delete(function (req, res, next) {
        Assets.remove({}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

assetRouter.route('/:assetId')
    .get(function (req, res, next) {
        Assets.findById(req.params.assetId, function (err, asset) {
            if (err) throw err;
            res.json(asset);
        });
    })

    .put(function (req, res, next) {
        Assets.findByIdAndUpdate(req.params.assetId, {
            $set: req.body
        }, {
                new: true
            }, function (err, asset) {
                if (err) throw err;
                res.json(asset);
            });
    })

    .delete(function (req, res, next) {
        Assets.findByIdAndRemove(req.params.assetId, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });
    });

module.exports = assetRouter;
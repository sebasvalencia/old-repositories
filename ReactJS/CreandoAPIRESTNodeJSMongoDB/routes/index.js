'use strict';

const express = require('express');
const productCtrl = require('../controllers/product');
const api = express.Router();//Manejo de rutas
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/user');

//GET todos los recursos
api.get('/product', auth, productCtrl.getProducts);

//GET un recurso especifico
api.get('/product/:productId', productCtrl.getProduct);

//POST subir productos
api.post('/product', auth, productCtrl.saveProduct);

//PUT actualizar producto
api.put('/product/:productId', auth, productCtrl.updateProduct);

//DELETE un producto
api.delete('/product/:productId', auth, productCtrl.deleteProduct);

api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);

//prueba con el middleware
//llama pprimero a auth.isAuth
api.get('/private', auth, function(req, res){
    res.status(200).send({message: `Tienes acceso`});
});

module.exports = api;

'use strict';

//Funciones para acceder a la BD

//importando el esquema
const Product = require('../models/product');

//GET
function getProducts(req, res){
  //res.send(200, {products: []});
  Product.find({}, (err, products) => {
    if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
    if(!products) return res.status(404).send({message: `No existen productos`});
    res.send(200, {products :products});
  });
}

//GET
function getProduct(req, res){
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
      if(err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
      if(!product) return res.status(404).send({message: `El producto no existe`});

      res.status(200).send({product}); //cuando product: product se puede escribir solo produc
  });
}

//POST
function saveProduct(req, res){
  //console.log(req.body);//acceder al cuerpo del mensaje gracias a bodyParser
  /*
  { name: 'Mac',
    prrice: '200',
    photo: 'mack.png',
    category: 'laptop' }
  */
  //res.send(200, {message: 'El producto se ha recibido'});
  //res.status(200).send({message: 'El producto se ha recibido'});
  console.log("POST /api/product");
  console.log(req.body);//acceder al cuerpo del mensaje gracias a bodyParser
  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productStored) => {
    if(err){
      res.status(500).send({message:`Fallo al guardar en al BD ${err}`})
    }else{
      res.status(200).send({product: productStored});
    }
  });
}

//PUT
function updateProduct(req, res){
  let productId = req.params.productId;
  let update = req.body;

  //primer param el id, segundo param un objecto con los campos a actualizar
  Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
    if(err) res.status(500).send({message: `Error al actualizar el producto: ${err}`});

    res.status(200).send({product: productUpdated});

  });
}

//DELETE
function deleteProduct(req, res){
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if(err) res.status(500).send({message: `Error al borrar el producto: ${err}`});

    product.remove(err => {
        if(err) res.status(500).send({message: `Error al borrar el producto: ${err}`});
        res.status(200).send({message:`El producto ha sido eliminado`});
    });
  });
}

module.exports ={
  getProducts,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct
}

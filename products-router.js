var app = require('express').Router();
var Product = require('./products.model');

module.exports = app;

app.get('/',function(req,res,next){
	res.render('products',{title: 'product',products: Product.getProducts()});
});

app.delete('/:id',function(req,res,next){
	Product.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

app.get('/:id/edit',function(req,res,next){
	res.render('edit',{product: Product.getProduct(req.params.id*1)});
});

app.get('/add',function(req,res,next){
	res.render('add');
});

app.put('/:id',function(req,res,next){
	Product.editProduct(req.params.id*1,req.body.productName);
	res.redirect('/products');
});

app.post('/',function(req,res,next){
	Product.addProduct(req.body.productName);
	res.redirect('/products');
});

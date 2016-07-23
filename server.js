var express = require('express');
var app = express();
var methodOverride = require('method-override');
var swig = require('swig');
swig.setDefaults({cache:false});
var products = require('./products.model');
var bodyParser = require('body-parser');

var path = require('path');

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.set('view engine','html');
app.engine('html',swig.renderFile);

app.get('/',function(req,res,next){
	res.render('home',{title: 'Home'});
});

app.get('/products',function(req,res,next){
	res.render('products',{title: 'product',products:products.getProducts()});
});

app.delete('/products/:id',function(req,res,next){
	//res.render('product',{title: 'product',product:product.getproduct()});
	products.deleteProduct(req.params.id*1);
	res.redirect('/products');
});

app.get('/products/:id/edit',function(req,res,next){
	res.render('edit',{product: products.getProduct(req.params.id*1)});

});

app.get('/products/add',function(req,res,next){
	res.render('add');

});


app.post('/products/:id',function(req,res,next){
	products.editProduct(req.params.id*1,req.body.productName);
	res.redirect('/products');
});

app.post('/products',function(req,res,next){
	products.addProduct(req.body.productName);
	res.redirect('/products');
});

app.listen(process.env.PORT, function(){
	console.log("listening on "+process.env.PORT);
})



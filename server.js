var express = require('express');
var app = express();
var methodOverride = require('method-override');
var swig = require('swig');
swig.setDefaults({cache:false});
var products = require('./products.model');
var bodyParser = require('body-parser');

var path = require('path');

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.set('view engine','html');
app.engine('html',swig.renderFile);

app.get('/',function(req,res,next){
	res.render('home',{title: 'Home'});
});

app.use('/products', require('./products-router'));


app.listen(process.env.PORT, function(){
	console.log("listening on "+process.env.PORT);
})



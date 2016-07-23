var _products = [
{
	id: 3,
	name: 'An old sneaker'
},
{
	id: 5,
	name: 'My treadmill'
}
];

module.exports = {
	getProducts: function(){
		return _products;
	},
	deleteProduct: function(id)
	{
		var toDelete = this.getProducts().filter(function(item){
			return item.id === id;
		})[0];
		var idx = this.getProducts().indexOf(toDelete);
		this.getProducts().splice(idx,1);
	},
	editProduct: function(id,newname)
	{
		var toEdit = this.getProducts().filter(function(item){
			return item.id===id;
		})[0];
		var idx = this.getProducts().indexOf(toEdit);
		_products[idx].name = newname;

	},
	getProduct: function(id)
	{
		var toReturn = this.getProducts().filter(function(item){
			return item.id === id;
		})[0];
		return toReturn;
	},
	addProduct: function(newname)
	{
		_products.push({id: _products.length, name: newname});
	}
}
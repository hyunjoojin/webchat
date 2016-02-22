
function VendingMachine () {
	this._htStocks = {};
	this._blance =0;
};

VendingMachine.prototype= {
	 // body...  
	_hasStocks(sDrink){
		return (this._htProducts && this._htProducts[sDrink] && this._htProducts[sDrink] > 0);
	} ,
	 buy : function(sDrink){
	 	
	 	if(!this._hasStocks(sDrink)){
	 		return null;
	 	}

	 	this._htProducts[sDrink]--;

	 	//return  this._htProducts[sDrink];
	 	return sDrink;
	 } ,
	 supply : function(htStocks){
	 	this._htProducts = htStocks;
	 },

	 insertCoin(coin){
	 	this._blance +=coin;
	 },
	 balance(){
	 	return this._blance;
	 }

};



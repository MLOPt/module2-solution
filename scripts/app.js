(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
	 	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(){
	  var toBuy = this;
	  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
	  
	  toBuy.buy = function(index) {
	    ShoppingListCheckOffService.buyItem(index);
	  };
	}


	function AlreadyBoughtController(){
  		var alreadyBought = this;
  		alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService(){
	  var service = this;
	  var toBuyItems = [
	    { name: "biscuits", quantity: 14 },
	    { name: "pepsi max", quantity: 100 },
	    { name: "crisps", quantity: 1 },
	    { name: "cat milk", quantity: 1 },
	    { name: "A whole lotta lovin'", quantity: 1 }];

	  var boughtItems = [];

	  service.buyItem = function(index) {
	    boughtItems.push(toBuyItems[index]);
	    toBuyItems.splice(index, 1);
	  };

	  service.getToBuyItems = function () {
	    return toBuyItems;
	  };

	  service.getBoughtItems = function () {
	    return boughtItems;
	  };

	}
})();
(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var listToBuy = this;
    listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    listToBuy.buyItem = function(itemIndex){
      var newItem = ShoppingListCheckOffService.removeItem(itemIndex);
      ShoppingListCheckOffService.addItem(newItem.name, newItem.quantity);
    };
    listToBuy.isEmpty = function(){
      return ShoppingListCheckOffService.isEmpty(listToBuy.items);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var listBought = this;
    listBought.items = ShoppingListCheckOffService.getItemsBought();
    listBought.isEmpty = function(){
      return ShoppingListCheckOffService.isEmpty(listBought.items);
    };
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var itemsToBuy = [
      { name: "bananas", quantity: "20" },
      { name: "apples", quantity: "10" },
      { name: "peaches", quantity: "2" },
      { name: "pinneapples", quantity: "1" },
      { name: "pears", quantity: "5" },
      { name: "melons", quantity: "3" }
    ];

    var itemsBought = [];

    service.removeItem = function(itemIndex){
       return itemsToBuy.splice(itemIndex, 1)[0];
    };

    service.addItem = function(newName, newQuantity){
      var newItem = { name: newName, quantity: newQuantity };
      itemsBought.push(newItem);
    };

    service.getItemsToBuy = function(){
      return itemsToBuy;
    };

    service.getItemsBought = function(){
      return itemsBought;
    };

    service.isEmpty = function(listToCheck){
      if (listToCheck.length == 0)
        return true;
      return false;
    };
  }
})();

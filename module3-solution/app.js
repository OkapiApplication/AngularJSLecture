(function(){
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.searchTerm = "";

    menu.getMatchedMenuItems = function(){
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm)
      promise.then(function(result){
        menu.foundItems = result;
      });
    };

    menu.removeItem = function(itemIndex){
      return MenuSearchService.removeItem(menu.foundItems, itemIndex);
    };
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: "GET",
        url:("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {
        var foundItems = [];
        if (searchTerm == "")
          return foundItems;
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1)
          foundItems.push(result.data.menu_items[i]);
        }
        return foundItems;
      });
    };

    service.removeItem = function(foundItems, itemIndex){
      return foundItems.splice(itemIndex, 1)[0];
    };
  }

  function FoundItems(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      // controller: 'ShoppingListDirectiveController as list',
      controller: NarrowItDownDirectiveController,
      controllerAs: 'menu',
      bindToController: true
    }
    return ddo;
  }

  function NarrowItDownDirectiveController() {
    var menu = this;

    menu.isEmpty = function(){
      if (menu.items.length > 0) {
        return false;
      }
      return true;
    };
  }
})()

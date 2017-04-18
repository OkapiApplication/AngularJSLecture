(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemCategoryController', ItemCategoryController);


  ItemCategoryController.$inject = ['items'];
  function ItemCategoryController(items) {
    var itemOfCategory = this;
    itemOfCategory.menuItems = items;
  }

})();

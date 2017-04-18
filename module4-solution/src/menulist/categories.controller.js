(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesListController', CategoriesListController);


  CategoriesListController.$inject = ['categories'];
  function CategoriesListController(categories) {
    var categorieList = this;
    categorieList.items = categories;
  }

})();

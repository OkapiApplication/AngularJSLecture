(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/menulist/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menulist/templates/categories.template.html',
      controller: 'CategoriesListController as categories',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items', {
      url: '/items/{{categoryShortName}}',
      templateUrl: 'src/menulist/templates/items.template.html',
      controller: 'ItemCategoryController as itemOfCategory',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }
})();

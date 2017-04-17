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
        items: ['MenuDataService', function (MenuDataService) {
          return MenuAppService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items',
      templateUrl: 'src/menulist/templates/items.template.html'
    });
  }
})();

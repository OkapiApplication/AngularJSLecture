(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService );

MenuDataService.$inject = ['$http', '$q']
function MenuDataService ($http, $q) {
  var service = this;

  service.getAllCategories = function(){
    var deferred = $q.defer();

    $http({
      method: "GET",
      url:("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (result) {
      deferred.resolve(result.data);
    });

    return deferred.promise;
  };

  service.getItemsForCategory = function(categoryShortName){
    var deferred = $q.defer();

    $http({
      method: "GET",
      url:("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {
      deferred.resolve(result.data.menu_items);
    });

    return deferred.promise;
  };

}

})();

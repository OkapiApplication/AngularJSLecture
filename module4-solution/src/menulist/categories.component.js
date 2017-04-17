(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menulist/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();

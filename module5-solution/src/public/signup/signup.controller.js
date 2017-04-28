(function(){
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'MenuService', 'SignUpService'];
  function SignUpController($scope, MenuService, SignUpService) {
    var signup = this;

    signup.checkFavoriteDish = function () {
      var promise = MenuService.getFavoriteDish($scope.signup.user.favoritedish);
      promise.then(function(result){
        $scope.regForm.favoritedish.$invalid = false;
        $scope.regForm.$invalid = false;
        signup.favoriteDish = result;
      }).catch(function(e){
        $scope.regForm.favoritedish.$invalid = true;
        $scope.regForm.$invalid  = true;
      });
    };

    signup.submit = function () {
      var newSignUp = {
        firstname: $scope.signup.user.firstname,
        lastname: $scope.signup.user.lastname,
        email: $scope.signup.user.email,
        phone: $scope.signup.user.phone,
        favoritedish: signup.favoriteDish
      }
      var saved = SignUpService.saveNewSignUp(newSignUp);
      if(saved)
        signup.completed = true;
    }
  }
})();

(function(){
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['signup'];
  function MyInfoController(signup) {
    var myInfo = this;
    myInfo.firstname = signup.firstname;
    myInfo.lastname = signup.lastname;
    myInfo.email = signup.email;
    myInfo.phone = signup.phone;
    myInfo.favoritedish = signup.favoritedish;

    myInfo.isSignup = function(){
      return signup.isSignup;
    }
  }
})();

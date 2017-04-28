(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  service.isSignup = false;

  service.saveNewSignUp = function (newSignUp) {
    service.firstname = newSignUp.firstname;
    service.lastname = newSignUp.lastname;
    service.email = newSignUp.email;
    service.phone = newSignUp.phone;
    service.favoritedish = newSignUp.favoritedish;
    service.isSignup = true;
    return true;
  };

  service.getSignUp = function(){
    return {
      firstname: service.firstname,
      lastname: service.lastname,
      email: service.email,
      phone: service.phone,
      favoritedish: service.favoritedish,
      isSignup: service.isSignup
    }
  }
}

})();

(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuService'];
function SignupController(UserService, MenuService) {
  var signupCtrl = this;

  signupCtrl.signed = false;

  signupCtrl.submit = function () {
    // check shortname
    MenuService.getMenuItem(signupCtrl.user.shortname).then(function(response) {
      signupCtrl.regForm.shortname.$error.notExists = false;
      signupCtrl.user.favorite = response;
      signupCtrl.signed = true;
      UserService.signed = true;
      UserService.user = signupCtrl.user;
    }, function(error) {
      signupCtrl.regForm.shortname.$error.notExists = true;
    });
  };
}

})();

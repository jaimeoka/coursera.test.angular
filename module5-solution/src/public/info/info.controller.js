(function () {

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['UserService', 'ApiPath'];
function InfoController(UserService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.signed = UserService.signed;
  infoCtrl.user = UserService.user;
  infoCtrl.basePath = ApiPath;
}

})();

(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  service.signed = false;
  service.user = {};

}



})();

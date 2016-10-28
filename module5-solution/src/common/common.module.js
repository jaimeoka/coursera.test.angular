(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://lit-inlet-59915.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

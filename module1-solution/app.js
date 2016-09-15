(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunch = "";
  $scope.check = function () {
    if ($scope.lunch=="") $scope.message = "Please enter data first";
    else {
      var items = $scope.lunch.split(',');
      if (items.length > 3) $scope.message = "Too much!";
      else $scope.message = "Enjoy!";
    }
  };
}

})();

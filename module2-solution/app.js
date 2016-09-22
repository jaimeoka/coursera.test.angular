(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController).
service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
  $scope.items = ShoppingListCheckOffService.getToBuyItems();
  $scope.buy = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
  $scope.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {name: 'Books', quantity: 5},
    {name: 'CDs', quantity: 10},
    {name: 'DVDs', quantity: 3},
    {name: 'Wine Bottles', quantity: 2},
    {name: 'Chocolate Cookies', quantity: 5},
    {name: 'Glasses', quantity: 2}
  ];
  var boughtItems = [];


  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };}

})();

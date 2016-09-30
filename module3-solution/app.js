(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItems)
.service('MenuSearchService', MenuSearchService);

function FoundItems() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.search = '';
  ctrl.found = {
    empty: false
  }
  ctrl.narrow = function() {
    ctrl.found.empty = true;
    if (ctrl.search == '') return;
    var promise = MenuSearchService.getMatchedMenuItems();
    ctrl.found.menu_items = [];
    promise.then(function (response) {
      for (var key in response.data.menu_items) {
        var item_description = response.data.menu_items[key].description;
        if (item_description.indexOf(ctrl.search) != -1) {
          ctrl.found.menu_items.push(response.data.menu_items[key]);
          ctrl.found.empty = false;
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  ctrl.removeItem = function (itemIndex) {
    ctrl.found.menu_items.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    });
  };
}

})();

(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCTrl = this;
  itemsCTrl.items = items.data.menu_items;
}

})();

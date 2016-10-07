(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoriesCTrl = this;
  categoriesCTrl.categories = categories.data;
}

})();

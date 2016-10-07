(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'modules/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();

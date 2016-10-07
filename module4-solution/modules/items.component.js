(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'modules/items.template.html',
  bindings: {
    items: '<'
  }
});

})();

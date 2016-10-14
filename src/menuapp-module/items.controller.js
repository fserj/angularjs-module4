(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'items','categoryName'];
function ItemsListController(MenuDataService, items,categoryName) {
  var mainList = this;
  mainList.items = items.menu_items;
  mainList.categoryName = categoryName;
}

})();

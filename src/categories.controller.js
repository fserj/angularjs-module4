(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
  console.log("controller created with "+mainList.items.length);
  // for(var i=0;i<items.length;i++){
  //   var obj = items[i];
  //   console.log(i+". "+obj.name+" url:"+obj.url);
  // }
}

})();

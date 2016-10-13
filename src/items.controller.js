(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', '$stateParams'];
function ItemsListController(MenuDataService, $stateParams) {
  var mainList = this;

  console.log("item controller created with "+$stateParams.categoryShortName);
  var promise =MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  // for(var i=0;i<items.length;i++){
  //   var obj = items[i];
  //   console.log(i+". "+obj.name+" url:"+obj.url);
  // }
}

})();

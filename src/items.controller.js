(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', '$stateParams'];
function ItemsListController(MenuDataService, $stateParams) {
  var mainList = this;
  mainList.items = [];

  console.log("item controller created with "+$stateParams.categoryShortName);
  var promise =MenuDataService.getItemsForCategory($stateParams.categoryShortName);
  promise.then(function (result){
      mainList.items = result.menu_items;
        mainList.categoryName = result.category.name;
        //console.log(mainList.categoryName);

        // for(var i=0;i<mainList.items.length;i++){
        //   var obj = mainList.items[i];
        //   console.log(i+". "+obj.name);
        // }
    });

}

})();

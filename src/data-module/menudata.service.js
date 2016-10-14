(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getAllCategories = function () {
    console.log("getAllCategories called");
    return  $http
      .get("https://davids-restaurant.herokuapp.com/categories.json")
      .then(function (result){
          return result.data;
      });

  };

  service.getItemsForCategory = function (categoryShortName) {
    console.log("getItemsForCategory called for "+categoryShortName);

    return  $http
      .get("https://davids-restaurant.herokuapp.com/menu_items.json",{
        params:{
          category: categoryShortName
        }
      })

      .then(function (result){
          return result.data;
      });

  };

}

})();

(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getAllCategories = function () {
    console.log("getAllCategories called");
    return  $http
      .get("http://davids-restaurant.herokuapp.com/categories.json")
      .then(function (result){
          return result.data;
      });

  };

  service.getItemsForCategory = function (categoryShortName) {

  };

}

})();

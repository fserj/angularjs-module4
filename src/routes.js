(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/main-categoriesList.js',
    controller: 'CategoriesListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/',
    params:{
      categoryShortName : null,
      categoryName : null
    },
    templateUrl: 'src/templates/main-items.template.html',
    controller: "ItemsListController as itemsList",
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }],
      categoryName: ['$stateParams', function($stateParams){
        return $stateParams.categoryName;
      }]
    }
  });

}

})();

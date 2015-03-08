'use strict';

angular.module('srs.sales', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sales', {
    templateUrl: 'modules/sales/sales.html',
    controller: 'srs.sales'
  });
}])

.controller('srs.sales', [function() {

}]);
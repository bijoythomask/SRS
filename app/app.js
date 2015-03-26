'use strict';

// Declare app level module which depends on views, and components
angular.module('srs', [
  'ngRoute',
  'ngMaterial',
  'srs.customer',
  'srs.sales',
  'myApp.version',
  'ngAnimate'
])
.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/customer'});
    }]);

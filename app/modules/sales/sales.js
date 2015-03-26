'use strict';

angular.module('srs.sales', ['ngRoute','srs.customer.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sales', {
    templateUrl: 'modules/sales/sales.html',
    controller: 'srs.salesHome'
  });
}])

.controller('srs.salesHome', salesHome);

salesHome.$inject = ['$scope','$q','Customer','$timeout'];

function salesHome ($scope, $q, Customer, $timeout) {
  var self = this;
  // list of `state` value/display objects
  self.states        = loadData();
  self.selectedItem  = null;
  self.searchText    = null;
  self.querySearch   = querySearch;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  
  function loadData(){
        var customers = Customer;
        var len = customers.length;
        var i;
        for (i=0; i < len; i++) {
            customers[i].name = angular.lowercase(customers[i].firstName) + " " + angular.lowercase(customers[i].lastName) ;
            customers[i].displayName = customers[i].firstName + " " + customers[i].lastName;
        }
        
        return customers;
  }
  
  function querySearch (query) {
        var results = query ? self.states.filter(createFilterFor(query)) : [], deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
  }
  
  /**
   * Create filter function for a query string
   */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(customer) {
            return (customer.name.indexOf(lowercaseQuery) >= 0);
        };
    }
}
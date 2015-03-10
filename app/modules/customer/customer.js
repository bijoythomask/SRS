'use strict';

angular.module('srs.customer', [
    'ngRoute',
    'srs.customer.services'
])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/customer', {
                    templateUrl: 'modules/customer/customer.html',
                    controller: 'srs.customerListCtrl'
                });
                $routeProvider.when('/customer_add', {
                    templateUrl: 'modules/customer/customer_add.html',
                    controller: 'srs.customerNewCtrl'
                });
                $routeProvider.when('/customer_edit/:index', {
                    templateUrl: 'modules/customer/customer_edit.html',
                    controller: 'srs.customerEditCtrl'
                });
            }])

        .controller('srs.customerListCtrl', customerListCtrl)
        .controller('srs.customerNewCtrl', customerNewCtrl)
        .controller('srs.customerEditCtrl', customerEditCtrl);

customerListCtrl.$inject = ['$scope', 'Customer'];
customerNewCtrl.$inject = ['$scope','$location', 'Customer'];
customerEditCtrl.$inject=['$scope','$routeParams','$location','Customer'];


function customerNewCtrl($scope,$location, Customer) {
    
    $scope.customers = Customer;
    
    $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
    };
    $scope.save = function(){
        $scope.customers.$add($scope.user);
        $location.path('/customer');
    };
}


function customerListCtrl($scope, Customer) {
    
    $scope.customers = Customer;
    
}

function customerEditCtrl($scope, $routeParams ,$location, Customer){
    var index = $routeParams.index;
    console.log(index);
    $scope.customers =Customer;
    $scope.user = $scope.customers+
            [index];
    console.log($scope.user);
    $scope.update = function(){
        $scope.customers.$save($scope.user);
        $location.path('/customer');
    };
    
}


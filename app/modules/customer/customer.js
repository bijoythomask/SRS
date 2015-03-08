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
            }])

        .controller('srs.customerListCtrl', customerListCtrl)
        .controller('srs.customerNewCtrl', customerNewCtrl);

customerListCtrl.$inject = ['$scope', 'Customer'];
customerNewCtrl.$inject = ['$scope'];


function customerNewCtrl($scope) {
    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: 'Bijoy',
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043'
    };
}


function customerListCtrl($scope, Customer) {
    $scope.customers = Customer;
    
}

 
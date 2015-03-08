'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('srs.customer.services', [
    'firebase'
])
    .value('version', '0.1')

    .factory("Customer", ["$firebase", function ($firebase) {
       
            // create a reference to the user's profile
            var ref = new Firebase("https://devthomas.firebaseio.com/profiles/");
            // return it as a synchronized object
            var sync = $firebase(ref);
           
            return sync.$asArray();
        }
    ]);

            
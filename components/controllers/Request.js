/**
 * Created by stephen on 22/03/15.
 */
'use strict';

app.controller('Request', function($scope, $http){
    // functional URL = http://www.w3schools.com/website/Customers_JSON.php
    $scope.test = "functional";
    $scope.get = function(){

        $http.get('http://www.w3schools.com/website/Customers_JSON.php').
            success(function(data) {
                $scope.greeting = data;
            });

    };


});
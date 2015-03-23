/**
 * Created by stephen on 22/03/15.
 */
'use strict';

app.controller('Request', function($scope, $http){
    // functional URL = http://www.w3schools.com/website/Customers_JSON.php
    $scope.test = "functional";
    $scope.get = function(){

        $http.get('http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10',{
            params: {
            }
        })
            .success(function(result) {
                console.log("Success", result);
                $scope.result = result;
            }).error(function() {
                console.log("error");
            });
        // the above is sending a GET request rather than an OPTIONS request
    };

});
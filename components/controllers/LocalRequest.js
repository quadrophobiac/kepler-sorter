/**
 * Created by stephen on 22/03/15.
 */
'use strict';

app.controller('Request', function($scope, $http, LocalKepler){
    // functional URL = http://www.w3schools.com/website/Customers_JSON.php
    $scope.test = "functional";

    $scope.koi = LocalKepler.data;

    $scope.factoryFetch = function(){ LocalKepler.captainsLog("hello", "how are you"); LocalKepler.get(1.02595675, 0.67125); };


    $scope.get = function(){
        // hopefully can create optional parameters for this that can be passed to get as args

        $http.get('http://www.asterank.com/api/kepler',{
            params: {
                query: '{"PER":{"$lt":1.02595675,"$gt":0.67125}}',
                limit: 10
            }
        })
            .success(function(result) {
                console.log("Success", result);
                $scope.result = result;
                console.log(result);
            }).error(function() {
                console.log("error");
            });
        // the above is sending a GET request rather than an OPTIONS request
    };

    $scope.localFetch = function(){

        $http.get('mars-neptune.json')
            .success(function(result){
                console.log("success");
                $scope.result = angular.fromJson(result);
                console.log($scope.result);
            })
            .error(function(){
                console.log("error");
            });
    };

    /*scope.result will be an array of Javascript objects*/

});
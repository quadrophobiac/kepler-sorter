/**
 * Created by stephen on 21/03/15.
 */
'use strict';
// uses the great code available here
//https://www.npmjs.com/package/ng-slider
//http://darul75.github.io/ng-slider/


app.controller('SlideCtrl', function($scope, $http, KeplerAPI, GetRequest){

    $scope.planets = [
        // indexed from mercury to pluto
        58.81337, 243.68663, 1, 1.028552, 0.41435, 0.44499, 0.72006, 0.67339, 6.40529];

    $scope.correlate = function(){
        KeplerAPI.get(function(data) {
            $scope.planets = data;
            // this fails
        });
    };

    $scope.consume = function(){
        $http.get
    }

    $scope.matches = function(){

        $http({
            method: 'GET',
            url: 'http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
            }
        })// above format always sent as OPTIONS instead of GET
        //$http.get('http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10')
            .success(function(data, status){
                $scope.status = status;
                $scope.data = data;
                console.log(data);
            })
            .error(function(data, status){
                $scope.data = data || "Request failed";
                $scope.status = status;
                console.log(status);
            });
    };

    $scope.fetch = function(){
        console.log("calling fetch");
        $http.jsonp('http://www.asterank.com/api/kepler?query={%22PER%22:{%22$lt%22:1.02595675,%22$gt%22:0.67125}}&limit=10&callback=JSON_CALLBACK')
            .success(function (data) {
            console.log("success");
            }).error(function(data, status, headers, config) {
            $scope.error = true;
                console.log("fail");
                console.log(status);
        });
    }

    $scope.value = "1";
    $scope.options = {
        from: 1,
        to: 9,
        step: 1,
        css: {
            background: {"background-color": "silver"},
            pointer: {"background-color": "red"}   // circle pointer
        },
        callback: function(value, released) {
            // useful when combined with 'realtime' option
            // released it triggered when mouse up
            console.log(value + " " + released);
            console.log($scope.planets[(value-1)]);
            //$scope.matches(); // CORS failure sends an OPTION request
            $scope.correlate(); // CORS failure sends a GET request, but doesn't have the headers to get around the domain shit
            //$scope.fetch(); // sends a GET request, the JSON is returned in browser, but the function returns a 404
        }
    };
});

/* second not carried over until final column |
 Mercury = 58 dayz 15 hours 36 minutes  | 84,456 mins | 58.81337 [0474
 Venus = 243days 0hours 14 minutes (retrograde) | 349,934 mins | 243.68663
 Earth = 23hours 56minutes 4 seconds | 1,436 mins | 1
 Mars = 24hours 37 minutes 48seconds | 1,477 mins | 1.028552 # should equal 1.02595675
 Jupiter = 9hours 55minutes 30seconds | 595 mins | 0.41435
 Saturn = 10hours 39minutes 22seconds | 639 mins | 0.44499
 Uranus = 17hours 14minutes (retrograde) | 1034 mins | 0.72006
 Neptune = 16hours 7minutes | 967 mins | 0.67339 # shoudl equal 0.67125
 Pluto = 6days 9hours 18minutes | 9198 mins | 6.40529
 trivia via https://answers.yahoo.com/question/index?qid=20081126225700AAS67Wu

 LENGTH OF YEAR

 Mercury 88 dayz
 Venus 224.7d
 Earth 365.25d
 Mars 1.88y
 Jupiter 11.86 y
 Saturn 29.46y
 Uranus 84.01y
 Neptune 164.79y
 Pluto 247.99y
 here is something xtra
 The sun 220 million years to orbit galaxy

 */
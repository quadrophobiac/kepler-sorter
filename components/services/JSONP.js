/**
 * Created by stephen on 22/03/15.
 */
'use strict';

//var myService = angular.module('JSONP', []);
app.factory('JSONP', ['$http',function($http) {
    return {
        getResponse: function(callback) {
            return $http.jsonp('http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10&callback=JSON_CALLBACK')
                .success(callback)
                .error(function(error) {
                    console.log("failure");
                });
        }
    };
}]);
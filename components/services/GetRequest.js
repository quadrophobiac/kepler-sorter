/**
 * Created by stephen on 22/03/15.
 */
'use strict';

app.factory("GetRequest", function($http) {

    return {
        getProject: function(success) {
            var getData = {
                method: 'POST',
                url: 'http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10',
                headers: {
                    'Content-Type': undefined,
                    'Access-Control-Allow-Origin': 'http://localhost',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
                }
            };

            $http(getData).success(function(data, status, headers, config) {
                console.log("successful call");
                successcb(data);
            }).error(function(data, status, headers, config) {});
        }
    };
});
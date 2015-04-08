/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.factory('KeplerAPI', function($http){

    var KeplerAPI = {

        data: [],

        radiiData: [],

        captainsLog: function(arg1, arg2){
            console.log(arg1+" , "+arg2+"!!!");
        },

        proxyGet: function(){
            return $http.get('http://localhost:4567/api?query={%22TPLANET%22:{%22$lt%22:320,%22$gt%22:290}}%26limit=10')
                .success(function(result){
                    var theData = angular.fromJson(result);
                    angular.copy(theData, KeplerAPI.data);
                })
                .error(function(){
                    console.log("proxy fail");
                });
        },

        radii: function(lt, gt){

            //One Earth mass =  0.000 003 003

            return $http.get('/api',{
                params: {
                    //query: '{"RPLANET":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    query: '{"RPLANET":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    limit: 100
                }
            })
                .success(function(result){
                    console.log("success");
                    console.log(result);
                    var theData = angular.fromJson(result);
                    angular.copy(theData, KeplerAPI.radiiData);
                    // it seems like there should be a better way, like self.data for the above invocation
                })
                .error(function(){
                    console.log("error");
                });

        },

        get: function(lt, gt){

            // this function can receive parameters for use in construction of query for AsteRank API
            return $http.get('/api',{
                params: {
                    query: '{"PER":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    limit: 10
                }
            })
                .success(function(result){
                    console.log("success");
                    console.log(result);
                    var theData = angular.fromJson(result);
                    angular.copy(theData, KeplerAPI.data);
                    // it seems like there should be a better way, like self.data for the above invocation
                })
                .error(function(){
                    console.log("error");
                });
        }
    };

    return KeplerAPI;

});
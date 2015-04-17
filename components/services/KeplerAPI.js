/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.factory('KeplerAPI', function($http){

    var KeplerAPI = {

        data: [],

        radiiData: [],

        captainsLog: function(arg1, arg2, arg3){
            console.log(arg1+" , "+arg2+" , "+arg3+"!!!");
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

        radii: function(lt, gt, limit){
            console.log(lt+" and "+gt+" and and "+limit);
            //One Earth mass =  0.000 003 003

            return $http.get('/api',{
                params: {
                    //query: '{"RPLANET":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    query: '{"RPLANET":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    limit: limit
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

        get: function(lt, gt, limit){

            if(angular.isUndefined(limit)){
                console.log("no limit param passed")
                limit = 100;
            }

            // this function can receive parameters for use in construction of query for AsteRank API
            return $http.get('/api',{
                params: {
                    query: '{"PER":{"$lt":'+lt+',"$gt":'+gt+'}}',
                    limit: limit
                }
            })
                .success(function(result){
                    console.log("success in factory");
                    console.log(result);
                    //var theData = angular.fromJson(result);
                    angular.copy(result, KeplerAPI.data);
                    console.log(typeof(KeplerAPI.data));
                    // it seems like there should be a better way, like self.data for the above invocation
                })
                .error(function(){
                    console.log("error");
                });
        }
    };

    return KeplerAPI;

});
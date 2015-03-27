/**
 * Created by stephen on 26/03/15.
 */
'use strict';

app.factory('LocalKepler', function($http){


    var LocalKepler = {

        data: [],

        captainsLog: function(arg1, arg2){
          console.log(arg1+" , "+arg2+"!!!");
        },

        get: function(){
            // this function can receive parameters for use in construction of query for AsteRank API
            return $http.get('http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10')
                .success(function(result){
                    console.log("success");
                    console.log(result);
                    var theData = angular.fromJson(result);
                    angular.copy(theData, LocalKepler.data);
                    // it seems like there should be a better way, like self.data for the above invocation
                })
                .error(function(){
                    console.log("error");
                });
        }
    };

    return LocalKepler;
});
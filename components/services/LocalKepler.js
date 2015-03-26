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
            return $http.get('mars-neptune.json')
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
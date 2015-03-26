/**
 * Created by stephen on 26/03/15.
 */
'use strict';

app.factory('LocalKepler', function($http){


    var LocalKepler = {

        data: [],

        get: function(){
            console.log("inside factory");
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

        //KOI: {}
    };

    return LocalKepler;
});
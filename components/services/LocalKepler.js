/**
 * Created by stephen on 26/03/15.
 */
'use strict';

app.factory('LocalKepler', function($http){


    var KOI = {

        get: function($http){
            $http.get('mars-neptune.json')
                .success(function(result){
                    console.log("success");
                    result = angular.fromJson(result);

                })
                .error(function(){
                    console.log("error");
                });
        },

        KOI: {}
    };

    return KOI;
});
/**
 * Created by stephen on 26/03/15.
 */
'use strict';

app.factory('LocalKepler', function($http){


    var KOI = {};

    KOI.data = [];

    KOI.get = function(){
        return $http.get('mars-neptune.json')
            .success(function(result){
                var theData = angular.fromJson(result);
                angular.copy(theData, data);
                console.log("success");
            })
            .error(function(){
                console.log("error");
            });
    };

        //KOI: {}


    return KOI;
});
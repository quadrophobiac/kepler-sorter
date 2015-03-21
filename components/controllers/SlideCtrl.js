/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.controller('SlideCtrl', function($scope){
    $scope.value = "50";
    $scope.options = {
        from: 1,
        to: 9,
        step: 1,
        callback: function(value, released) {
            // useful when combined with 'realtime' option
            // released it triggered when mouse up
            console.log(value + " " + released);
        }
    };
});
/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.controller('SlideCtrl', function($scope){
    $scope.value = "50";
    $scope.options = {
        from: 1,
        to: 100,
        step: 1
    };
});
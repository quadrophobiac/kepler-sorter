/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.controller('sliderDemoCtrl', function($scope, $log, colorpicker) {

    function refreshSwatch (ev, ui) {
        var red = $scope.colorpicker.red,
            green = $scope.colorpicker.green,
            blue = $scope.colorpicker.blue;
        colorpicker.refreshSwatch(red, green, blue);
    }

    // Slider options with event handlers
    $scope.slider = {
        'options': {
            start: function (event, ui) { $log.info('Event: Slider start - set with slider options', event); },
            stop: function (event, ui) { $log.info('Event: Slider stop - set with slider options', event); }
        }
    }

    $scope.demoVals = {
        sliderExample3:     14,
        sliderExample4:     14,
        sliderExample5:     50,
        sliderExample8:     0.34,
        sliderExample9:     [-0.52, 0.54],
        sliderExample10:     -0.37
    };

    $scope.colorpicker = {
        red: 255,
        green: 140,
        blue: 60,
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 255,
            range: 'min',
            change: refreshSwatch,
            slide: refreshSwatch
        }
    };
});
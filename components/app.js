/**
 * Created by stephen on 21/03/15.
 */
'use strict';
//var app = angular.module('sliderDemoApp', ['ui.slider', 'ngRoute']);
var app = angular.module('sliderDemoApp', ['ngSlider', 'ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        });
    });
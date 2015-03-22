/**
 * Created by stephen on 21/03/15.
 */
'use strict';
var app = angular.module('sliderDemoApp', ['ngSlider', 'ngResource'])
    .config(function($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common

        //Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
//var app = angular.module('sliderDemoApp', ['ngSlider', 'ngRoute'])
//    .config(function ($routeProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'views/posts.html',
//            controller: 'PostsCtrl'
//        });
//    });
var app = angular.module('stopwatch', ['ngRoute','googlechart']); /* global angular */

app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl : 'pages/main.html',
        controller  : 'main.ctrl'
    })
    .when('/event', {
        templateUrl : 'pages/event.html',
        controller  : 'event.ctrl'
    })
    .when('/start', {
        templateUrl : 'pages/start.html',
        controller  : 'start.ctrl'
    })
    .when('/lap', {
        templateUrl : 'pages/lap.html',
        controller  : 'lap.ctrl'
    })
    .when('/stats', {
        templateUrl : 'pages/stats.html',
        controller  : 'stats.ctrl'
    })
    .when('/version', {
        templateUrl : 'pages/version.html',
        controller : 'version.ctrl'
    })
    .when('/developer', {
        templateUrl : 'pages/developer.html',
        controller : 'developer.ctrl'
    })
    .when('/help', {
        templateUrl : 'pages/help.html',
        controller : 'help.ctrl'
    })
    .otherwise({
        templateUrl : 'pages/wait.html'
    });
});
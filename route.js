'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'langages.html',
                controller: 'langagesSkills'
            })
            .when('/langages', {
                templateUrl: 'langagesRoute.html',
                controller: 'langagesRouteSkills'
            })
            .when('/OS', {
                templateUrl: 'OS.html',
                controller: 'osSkills'
            })
            .when('/framebibli', {
                templateUrl: 'framebibli.html',
                controller: 'frameSkills'
            })
            .when('/outils', {
                templateUrl: 'outils.html',
                controller: 'toolsSkills'
            })
            .otherwise({
                redirectTo: '/'
            });
}]);

app.controller('langagesSkills', ['$scope', function($scope) {
    
}]);
app.controller('langagesRouteSkills', ['$scope', function($scope) {
    
}]);
app.controller('osSkills', ['$scope', function($scope) {
    
}]);
app.controller('frameSkills', ['$scope', function($scope) {
    
}]);
app.controller('toolsSkills', ['$scope', function($scope) {
    
}]);
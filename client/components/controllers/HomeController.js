// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('app.home', ['ngRoute', 'LocalStorageModule'])

// Routing configuration for this module
.config(['$routeProvider', function($routeprovider) {
    $routeprovider.when('/', {
        controller: 'HomeController',
        templateUrl: 'components/views/home.html'
    });
}])

// Controller definition for this module
.controller('HomeController', ['$scope', 'localStorageService', function($scope, localStorageService) {

    // Just a housekeeping.
    // In the init method we are declaring all the
    // neccesarry settings and assignments to be run once
    // controller is invoked
    $scope.userLogged = null
    init();

    function init() {
        $scope.userLogged = localStorageService.get('loggedUser');
    };

}]);

angular.module('dashboard.main', ['app.localstorage', 'ui.router'])

// Routing configuration for this module
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('mainAdmin', {
            url: '/',
            controller: 'LoginAdminController',
            templateUrl: 'components/views/admin/main-screen.html'
        });
}])

.controller('LoginAdminController', ['$scope', 'LocalStorageService',
    function($scope, LocalStorageService) {

        $scope.admin = null;

        $scope.init = function() {
            $scope.admin = LocalStorageService.getData(LocalStorageService.storeMap.USER);
        };

        $scope.init();
    }
]);

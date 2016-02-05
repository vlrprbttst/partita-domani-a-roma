define(['angular', 'services/device'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('partitaaroma.controllers.PageCtrl', ['partitaaroma.services.Device'])
        .controller('PageCtrl', function($rootScope, $scope, $window, Device) {
            var noSocialButtonsPath = {
                'views/cookies.html': true
            };
            $rootScope.$on('$routeChangeStart', function(event, next, current) {
                $rootScope.loaded = false;
                $scope.hideSocialButtons = noSocialButtonsPath[next.templateUrl];
            });

            $scope.deviceModel = Device.getModel();
        });
});

define(['angular', 'services/device'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name wutsapp.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the wutsapp
     */
    angular.module('partitaaroma.controllers.ContentCtrl', ['partitaaroma.services.Device'])
        .controller('ContentCtrl', function($rootScope, $scope, $window,  $location, Device, match) {
            $scope.link = 'oggi';
            $scope.date = 'oggi';
            if ($location.path().indexOf('oggi') != -1) {
                $scope.link = 'domani';
                $scope.date = 'domani';
            }

            $scope.match = match;
            $scope.contentClass = ($scope.match ? 'si' : 'no') + '-' + Math.floor((Math.random() * 10) + 1);

            $rootScope.loaded = true;

        });
});

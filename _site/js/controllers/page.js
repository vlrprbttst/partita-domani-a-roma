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
            $scope.deviceModel = Device.getModel();
        });
});

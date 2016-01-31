define(['angular'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name partitaaroma.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the partitaaroma
     */
    angular.module('partitaaroma.controllers.CookiesCtrl', [])
        .controller('CookiesCtrl', function($rootScope, $scope) {
            $rootScope.loaded = true;
        });
});

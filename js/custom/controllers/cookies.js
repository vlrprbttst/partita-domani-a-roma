define(['angular', 'services/utilities'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name partitaaroma.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the partitaaroma
     */
    angular.module('partitaaroma.controllers.CookiesCtrl', ['partitaaroma.services.Utilities'])
        .controller('CookiesCtrl', function($rootScope, $scope, Utilities) {
            $scope.headerImage = Utilities.loadImage('/images/social-img.jpg', function() {
                $rootScope.loaded = true;
                $rootScope.$apply();
            });
        });
});

define(['angular', 'services/device'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name partitaaroma.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the partitaaroma
     */
    angular.module('partitaaroma.controllers.ContentCtrl', ['partitaaroma.services.Device'])
        .controller('ContentCtrl', function($rootScope, $scope, $window,  $location, Device, match) {
            $rootScope.$on('$routeChangeStart', function(next, last) {
                $rootScope.loaded = false;
            });

            var maxImgIndex = 10;

            $scope.location = 'oggi';
            if ($location.path().indexOf('oggi') == -1) {
                $scope.location = 'domani';
            }

            $scope.match = match;

            var imgIndex = Math.floor((Math.random() * maxImgIndex) + 1);
            var imgType = ($scope.match ? 'si' : 'no');

            var bgImg = new Image();
            bgImg.onload = function() {
                $scope.contentClass = imgType + '-' + imgIndex;
                $rootScope.loaded = true;
                $rootScope.$apply();
            };
            bgImg.src = '/images/' + imgType + '-sfondo' + imgIndex + '.jpg';


        });
});

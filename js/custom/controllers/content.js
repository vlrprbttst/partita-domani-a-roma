define(['angular', 'services/device', 'services/utilities'], function(angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name partitaaroma.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the partitaaroma
     */
    angular.module('partitaaroma.controllers.ContentCtrl', ['partitaaroma.services.Device', 'partitaaroma.services.Utilities', 'ngInstafeed'])
        .controller('ContentCtrl', function($rootScope, $scope, $window, $location, Device, match, ngInstafeed, Utilities) {
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
            var backgroundUrl = '/images/' + imgType + '-sfondo' + imgIndex + '.jpg';
            $scope.background = Utilities.loadImage(backgroundUrl, function() {
                $rootScope.loaded = true;
                $rootScope.$apply();
            });

            /*
            * Background from instagram
            *
            ngInstafeed.get({}, function(err, res) {
                if (err) {
                    return;
                }
                console.log(res); // see what the data is like
                //TODO: choose an image randomly among the data array
                $scope.background = Utilities.loadImage(res.data[0].images.standard_resolution.url, function() {
                    $rootScope.loaded = true;
                    $rootScope.$apply();
                });
            });
            */

        });
});

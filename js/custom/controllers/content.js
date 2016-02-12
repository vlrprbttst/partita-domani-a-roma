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

            var maxImgIndex = 10;

            $scope.location = 'oggi';
            if ($location.path().indexOf('oggi') == -1) {
                $scope.location = 'domani';
            }

            $scope.match = match;

            $scope.toggleMenu = function() {
                $rootScope.menuOpened = !$rootScope.menuOpened;
            };

            /*
            var imgIndex = Math.floor((Math.random() * maxImgIndex) + 1);
            var imgType = ($scope.match ? 'si' : 'no');
            var backgroundUrl = '/images/' + imgType + '-sfondo' + imgIndex + '.jpg';
            $scope.background = backgroundUrl;
            Utilities.loadImages(backgroundUrl, function() {
                $rootScope.loaded = true;
                $rootScope.$apply();
            });
            */


            /*
             * Background from instagram
             */

            if (!$scope.match) {
                var imgIndex = Math.floor((Math.random() * maxImgIndex) + 1);
                var backgroundUrl = '/images/no-sfondo' + imgIndex + '.jpg';
                $scope.background = backgroundUrl;
                Utilities.loadImages(backgroundUrl, function() {
                    $rootScope.loaded = true;
                    $rootScope.$apply();
                });
            } else {
                var instaImgNumber = 20;
                var instaImgResolution = 'thumbnail';
                if ($window.innerWidth > 600) {
                    instaImgNumber = 11;
                    instaImgResolution = 'low_resolution';
                }
                if ($window.innerWidth > 768) {
                    instaImgNumber = 23;
                }
                if ($window.innerWidth > 1281) {
                    instaImgNumber = 42;
                }

                ngInstafeed.get({
                    'get': 'tagged',
                    'tagName': 'partitadomaniaroma'
                }, function(err, res) {
                    if (err) {
                        $rootScope.loaded = true;
                        $rootScope.$apply();
                        return;
                    }

                    var totalInstaImages = res.data.length;
                    var imagesToLoad = [];
                    for (var i = 0; i < instaImgNumber; i++) {
                        var image = res.data[(i % totalInstaImages)].images[instaImgResolution].url;
                        imagesToLoad.push(image);
                    }


                    Utilities.loadImages(imagesToLoad, function() {
                        $scope.$apply(function() {
                            $scope.images = imagesToLoad;
                        });
                        $rootScope.loaded = true;
                        $rootScope.$apply();
                    });
                });

            }

        });
});

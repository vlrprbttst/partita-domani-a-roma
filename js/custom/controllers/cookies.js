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
        .controller('CookiesCtrl', function($rootScope, $scope, $window, $cookies, Utilities) {
            $rootScope.loaded = true;

            $scope.back = function() {
                var cookieExpirationDate = new Date();
                cookieExpirationDate.setYear(2100);
                $cookies.put('showCookiesPolicy', 'false', {
                    expires: cookieExpirationDate
                });
                $window.history.back();
            };
        });
});

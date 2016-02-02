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
            $rootScope.$on('$routeChangeStart', function(next, last) {
                $rootScope.loaded = false;
            });
            $rootScope.$on('$viewContentLoaded', function(next, last) {

                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    //if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                    //if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));

            });

            $scope.deviceModel = Device.getModel();
        });
});

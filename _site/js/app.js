/*jshint unused: vars */
define([
        'angular',
        'controllers/page',
        'controllers/content',
        'services/matchesprovider'
   ],
    /*deps*/
    function(angular, PageCtrl, ContentCtrl) /*invoke*/ {
        'use strict';

        /**
         * @ngdoc overview
         * @name wutsapp
         * @description
         * # wutsapp
         *
         * Main module of the application.
         */
        return angular
            .module('partitaaroma', [
                'partitaaroma.controllers.PageCtrl',
                'partitaaroma.controllers.ContentCtrl',
                'partitaaroma.services.MatchesProvider',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
//                'ngAnimate',
                'ngTouch'
            ])
            .config(function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/domani', {
                        templateUrl: 'views/content.html',
                        controller: 'ContentCtrl',
                        resolve: {
                            match: function($route, MatchesProvider) {
                                return MatchesProvider.getMatch(1);
                            }
                        }
                    })                                    
                    .when('/oggi', {
                        templateUrl: 'views/content.html',
                        controller: 'ContentCtrl',
                        resolve: {
                            match: function($route, MatchesProvider) {
                                return MatchesProvider.getMatch(0);
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/domani'
                    });
            });
    });

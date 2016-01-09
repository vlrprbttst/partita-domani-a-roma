/*jshint unused: vars */
define([
        'angular',
        'controllers/page',
        'controllers/content',
        'services/matchesprovider',
        'services/match'
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
                'partitaaroma.services.Match',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngTouch'
            ])
            .config(function($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
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
                    .when('/si', {
                        templateUrl: 'views/content.html',
                        controller: 'ContentCtrl',
                        resolve: {
                            match: function($route, MatchesProvider, Match) {
                                var json = {
                                    timestamp: new Date().getTime(),
                                    homeTeamName: "AS Pierba",
                                    awayTeamName: "",
                                };

                                return new Match(json);
                            }
                        }
                    })
                    .when('/no', {
                        templateUrl: 'views/content.html',
                        controller: 'ContentCtrl',
                        resolve: {
                            match: function($route, MatchesProvider, Match) {
                                return null;
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
                    

            });
    });

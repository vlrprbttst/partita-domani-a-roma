/*jshint unused: vars */
define([
        'angular',
        'angular-route',
        'angular-cookies',
        'angular-sanitize',
        'angular-resource',
        'angular-touch',
        'angular-instafeed',
        'controllers/page',
        'controllers/content',
        'controllers/cookies',
        'services/matchesprovider',
        'services/match',
        'directives/stopscreenmove',
        'directives/load-once-a-day',
        'directives/cookies-policy'
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
                'partitaaroma.controllers.CookiesCtrl',
                'partitaaroma.services.MatchesProvider',
                'partitaaroma.services.Match',
                'partitaaroma.directives.LoadOnceADay',
                'partitaaroma.directives.StopScreenMove',
                'partitaaroma.directives.CookiesPolicy',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngTouch',
                'ngInstafeed'
            ])
            .config(function($routeProvider, $locationProvider, ngInstafeedProvider) {
                ngInstafeedProvider.setAccessToken('2692511198.5b9e1e6.c0e59bc733bd425c85a82e6ad3092ea6');
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
                    .when('/cookies', {
                        templateUrl: 'views/cookies.html',
                        controller: 'CookiesCtrl'
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

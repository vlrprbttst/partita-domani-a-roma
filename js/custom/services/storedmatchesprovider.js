/*jshint unused: vars */
define(['angular', 'services/match', 'services/storedmatchesprovider'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('partitaaroma.services.StoredMatchesProvider', ['partitaaroma.services.Match'])
        .service('StoredMatchesProvider', function($http, $q, Match) {
            var matches;

            this.getMatches = function(numberOfDays) {

                var getMatchesPromise = $q(function(resolve, reject) {
                    if (matches) {
                        resolve({
                            data: {
                                fixtures: getDaysMatches(numberOfDays)
                            }
                        });
                        return;
                    }

                    $http({
                        method: 'GET',
                        url: '/data/fixtures.json'
                    }).then(function(response) {
                        matches = response.data;
                        resolve({
                            data: {
                                fixtures: getDaysMatches(numberOfDays)
                            }
                        });
                        return;                        
                    });
                });

                return getMatchesPromise;
            };

            function getDaysMatches(numberOfDays) {
                var keys = [];
                var fixtures = [];
                numberOfDays = numberOfDays || 0;
                if (numberOfDays === 0) {
                    keys = Object.keys(matches);
                } else {
                    var now = new Date();
                    var nowMillis = now.getTime();
                    for (var i = 1; i <= numberOfDays; i++) {
                        var day = new Date(nowMillis + 86400000 * (i - 1));
                        var month = day.getMonth() + 1;
                        if(month < 10) {
                            month = '0' + month;
                        }
                        var key = day.getFullYear() + "-" + month + "-" + day.getDate();
                        keys.push(key);
                    }
                }

                keys.forEach(function(key) {
                    var dayFixtures = matches[key];
                    if (!dayFixtures) {
                        return;
                    }
                    dayFixtures.forEach(function(fixture) {
                        fixtures.push(fixture);
                    });
                });

                return fixtures;
            }

        });
});

/*jshint unused: vars */
define(['angular', 'services/match'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('partitaaroma.services.MatchesProvider', ['partitaaroma.services.Match'])
        .service('MatchesProvider', function($http, $q, Match) {
            var days;

            this.getMatch = function(dayIndex) {

                var getMatchesPromise = $q(function(resolve, reject) {
                    if (days) {
                        if (typeof dayIndex === "undefined") {
                            dayIndex = 0;
                        }
                        resolve(days[dayIndex] ? days[dayIndex][0] : null);
                        return;
                    }
                    days = [];
                    var romaFixtures = $http({
                        method: 'GET',
                        url: 'http://api.football-data.org/v1/teams/100/fixtures?timeFrame=n14&venue=home',
                        headers: {
                            'X-Auth-Token': 'c13bbe0b9fde41ed80f374eb6f105954'
                        },
                        dataType: 'jsonp'
                    });
                    var lazioFixtures = $http({
                        method: 'GET',
                        url: 'http://api.football-data.org/v1/teams/110/fixtures?timeFrame=n21&venue=home',
                        headers: {
                            'X-Auth-Token': 'c13bbe0b9fde41ed80f374eb6f105954'
                        },
                        dataType: 'jsonp'
                    });


                    $q.all([romaFixtures, lazioFixtures]).then(function(arrayOfResults) {
                        angular.forEach(arrayOfResults, function(result, index) {
                            angular.forEach(result.data.fixtures, function(fixture, index) {
                                var fixtureDate = new Date(fixture.date);
                                var json = {
                                    timestamp: fixtureDate.getTime(),
                                    homeTeamName: fixture.homeTeamName,
                                    awayTeamName: fixture.awayTeamName,
                                };
                                if (new Date().getDate() == fixtureDate.getDate()) {
                                    days[0] = days[0] || [];
                                    days[0].push(new Match(json));
                                } else {
                                    days[1] = days[1] || [];
                                    days[1].push(new Match(json));
                                }
                            });
                        });
                        resolve(days[dayIndex] ? days[dayIndex][0] : null);

                    });

                });

                return getMatchesPromise;
            };

        });
});
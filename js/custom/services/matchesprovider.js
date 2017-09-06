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
    angular.module('partitaaroma.services.MatchesProvider', ['partitaaroma.services.StoredMatchesProvider', 'partitaaroma.services.Match'])
        .service('MatchesProvider', function($http, $q, StoredMatchesProvider, Match) {
            var NUMBER_OF_DAYS_TO_FETCH = 2;
            var days;

            this.getMatch = function(dayIndex) {

                var getMatchesPromise = $q(function(resolve, reject) {
                    if (days) {
                        if (typeof dayIndex === "undefined") {
                            dayIndex = 0;
                        }
                        resolve(days[dayIndex] ? days[dayIndex] : null);
                        return;
                    }
                    days = [];
                    var romaFixtures = $http({
                        method: 'GET',
                        url: 'http://api.football-data.org/v1/teams/100/fixtures?timeFrame=n' + NUMBER_OF_DAYS_TO_FETCH + '&venue=home',
                        headers: {
                            'X-Auth-Token': 'c13bbe0b9fde41ed80f374eb6f105954'
                        },
                        dataType: 'jsonp'
                    });
                    var lazioFixtures = $http({
                        method: 'GET',
                        url: 'http://api.football-data.org/v1/teams/110/fixtures?timeFrame=n' + NUMBER_OF_DAYS_TO_FETCH + '&venue=home',
                        headers: {
                            'X-Auth-Token': 'c13bbe0b9fde41ed80f374eb6f105954'
                        },
                        dataType: 'jsonp'
                    });
                    var storedFixtures = StoredMatchesProvider.getMatches(NUMBER_OF_DAYS_TO_FETCH);


                    $q.all([romaFixtures, lazioFixtures, storedFixtures]).then(function(arrayOfResults) {
                        angular.forEach(arrayOfResults, function(result, index) {
                            angular.forEach(result.data.fixtures, function(fixture, index) {
                                var fixtureDate = new Date(fixture.date);
                                var today = new Date();
                                var homeTeamName = fixture.homeTeamName.toLowerCase();
                                if (homeTeamName.indexOf("ss lazio") === -1 || homeTeamName.indexOf("as roma") === -1 || homeTeamName.indexOf("italrugby") === -1) {
                                    return;
                                }
                                if (fixtureDate.getYear() < today.getDate() || fixtureDate.getMonth() < today.getMonth() || fixtureDate.getDate() < today.getDate()) {
                                    return;
                                }
                                var json = {
                                    timestamp: fixtureDate.getTime(),
                                    homeTeamName: fixture.homeTeamName,
                                    awayTeamName: fixture.awayTeamName,
                                };
                                if (today.getDate() == fixtureDate.getDate()) {
                                    if (typeof days[0] === "undefined" ) {
                                        days[0] = new Match(json);
                                    }
                                } else {
                                    if (typeof days[1] === "undefined" ) {
                                        days[1] = new Match(json);
                                    }
                                }
                            });
                        });
                        resolve(days[dayIndex] ? days[dayIndex] : null);

                    });

                });

                return getMatchesPromise;
            };

        });
});

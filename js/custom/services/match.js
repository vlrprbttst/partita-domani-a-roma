define(['angular', 'services/utilities'], function(angular) {
    'use strict';
    angular.module('partitaaroma.services.Match', ['partitaaroma.services.Utilities'])
        .factory('Match', function(Utilities) {
            var Match = function(json) {
            	this.homeTeam = Utilities.transformTeamName(json.homeTeamName.toLowerCase());
                this.awayTeamName = json.awayTeamName;
                this.homeTeamClass = this.homeTeam.name;
                this.timestamp = json.timestamp;
                this.date = new Date(this.timestamp);
            };

            return Match;
        });
});

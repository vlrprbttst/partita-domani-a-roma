define(['angular'], function(angular) {
    'use strict';
    angular.module('partitaaroma.services.Match', [])
        .factory('Match', function() {
            var Match = function(json) {
            	this.homeTeamName = json.homeTeamName;
                this.awayTeamName = json.awayTeamName;
                this.homeTeamClass = this.homeTeamName.toLowerCase().replace(/\W/g, '-');
                this.timestamp = json.timestamp;
                this.date = new Date(this.timestamp);
            };

            return Match;
        });
});

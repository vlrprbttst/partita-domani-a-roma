/*jshint unused: vars */
define(['angular'], function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name angularjsRequiresjsYeomanTestApp.ContentProvider
     * @description
     * # ContentProvider
     * Service in the angularjsRequiresjsYeomanTestApp.
     */
    angular.module('partitaaroma.services.Utilities', [])
        .service('Utilities', function() {
            this.loadImage = function(url, callback) {
                var bgImg = new Image();
                bgImg.onload = callback;
                bgImg.src = url;
                return url;
            };

            var teamNameTransformerMap = {
                'ss lazio': {
                    article: 'la',
                    name: 'lazio'
                },
                'as roma': {
                    article: 'la',
                    name: 'roma'
                },
                'italrugby': {
                    article: 'l\'',
                    name: 'italrugby'
                }
            };
            this.transformTeamName  = function(teamName) {
                return teamNameTransformerMap[teamName];
            };
        });
});

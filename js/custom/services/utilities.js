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
            this.loadImages = function(urls, callback) {
                if (!Array.isArray(urls)) {
                    urls = [urls];
                }

                var imagesLoadedCounter = 0;
                function imageLoadedCallback() {
                    imagesLoadedCounter++;
                    if (imagesLoadedCounter == urls.length && callback) {
                        callback();
                    }
                }
                urls.forEach(function (url) {
                    var bgImg = new Image();
                    bgImg.onload = imageLoadedCallback;
                    bgImg.src = url;
                });
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
                var tranformedTeamName = teamNameTransformerMap[teamName];
                return tranformedTeamName || teamName;
            };
        });
});

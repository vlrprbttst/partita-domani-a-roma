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
        });
});

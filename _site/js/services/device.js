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
    angular.module('partitaaroma.services.Device', [])
        .service('Device', function($window) {

            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            var model = '';
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                model = 'isMobile iOS';
            } else if (userAgent.match(/Android/i)) {
                model = 'isMobile android';
            }
            
            this.getModel = function() {
                return model;
            };
        });
});

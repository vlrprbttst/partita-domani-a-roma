define(['angular'], function(angular) {
    'use strict';

    angular.module('partitaaroma.directives.StopScreenMove', [])
        .directive("stopScreenMove", function() {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, element, attrs) {
                    element.on("touchmove", function(event) {
                        event.preventDefault();
                    });
                }
            };
        });
});
define(['angular', 'services/device'], function(angular) {
    'use strict';

    angular.module('partitaaroma.directives.StopScreenMove', ['partitaaroma.services.Device'])
        .directive("stopScreenMove", function(Device) {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, element, attrs) {
                	if(!Device.isIOS()) {
                		return;
                	}
                    element.on("touchmove", function(event) {
                        event.preventDefault();
                    });
                }
            };
        });
});
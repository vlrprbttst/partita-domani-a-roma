define(['angular'], function(angular) {
    'use strict';

    angular.module('partitaaroma.directives.LoadOnceADay', [])
        .directive("loadOnceADay", function($route, $timeout) {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, element, attrs) {
                    var nowMillis = new Date().getTime();
                    var tomorrow = new Date(nowMillis + 86400*1000);
                    tomorrow.setHours(0);
                    tomorrow.setMinutes(1);
                    tomorrow.setSeconds(0);
                    var tomorrowMillis = tomorrow.getTime();
                    var reloadDelay = tomorrowMillis - nowMillis;
                    $timeout(function() {
                        $route.reload();
                    }, reloadDelay);
                }
            };
        });
});
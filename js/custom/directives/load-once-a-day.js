define(['angular'], function(angular) {
    'use strict';

    angular.module('partitaaroma.directives.LoadOnceADay', [])
        .directive("loadOnceADay", function($window, $interval) {
            return {
                restrict: 'A',
                scope: true,
                link: function(scope, element, attrs) {
                    var tomorrow = new Date((new Date().getTime()) + 86400*1000);
                    tomorrow.setHours(0);
                    tomorrow.setMinutes(0);
                    tomorrow.setSeconds(0);
                    var tomorrowMillis = tomorrow.getTime();
                    $interval(function() {
                        var nowMillis = new Date().getTime();
                        if(nowMillis > tomorrowMillis) {
                            tomorrow = new Date((new Date().getTime()) + 86400*1000);
                            tomorrow.setHours(0);
                            tomorrow.setMinutes(0);
                            tomorrow.setSeconds(0);
                            tomorrowMillis = tomorrow.getTime();

                            $window.location.reload();                        
                        }
                    }, 500);
                }
            };
        });
});
define(['angular'], function(angular) {
    'use strict';

    angular.module('partitaaroma.directives.CookiesPolicy', [])
        .directive("cookiesPolicy", function($cookies, $parse) {
            return {
                restrict: 'E',
                scope: true,
                template: '<div ng-if="showCookiesPolicy" class="cookie-popup">Utilizziamo i cookie per fornire le funzioni dei social media e analizzare il traffico.<br>&nbsp;<a class="cookie-consent" ng-click="acceptCookiesPolicy()" href="javascript:void(0);">Accetta</a> oppure <a class="cookie-info" href="/cookies">visualizza ulteriori dettagli</a>.</div>',
                link: function(scope, element, attrs) {
                    scope.showCookiesPolicy = $cookies.get('showCookiesPolicy') !== 'false';
                    scope.acceptCookiesPolicy = function () {
                        scope.showCookiesPolicy = false;
                        var cookieExpirationDate = new Date();
                        cookieExpirationDate.setYear(2100);
                        $cookies.put('showCookiesPolicy', 'false', {expires: cookieExpirationDate});
                    };
                }
            };
        });
});
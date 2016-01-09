require.config({
  paths : {
    angular : '../../bower_components/angular/angular',
    'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
    'angular-resource' : '../../bower_components/angular-resource/angular-resource',
    'angular-route' : '../../bower_components/angular-route/angular-route',
    'angular-sanitize' : '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch' : '../../bower_components/angular-touch/angular-touch',
  },
  shim : {
    angular : {
      exports : 'angular'
    },
    'angular-route' : ['angular'],
    'angular-cookies' : ['angular'],
    'angular-sanitize' : ['angular'],
    'angular-resource' : ['angular'],
    'angular-touch' : ['angular']
  },
  priority : ['angular'],
  packages : []
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-touch'
  ], function(angular, app, ngRoute, ngCookies, ngSanitize, ngResource, ngTouch) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});

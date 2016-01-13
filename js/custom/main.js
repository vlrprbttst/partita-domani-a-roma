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
    /* jshint ignore:end - */
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});


  //google analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72386870-1', 'auto');
  ga('send', 'pageview');

  // fb

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  //twt

  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

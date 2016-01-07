require.config({
  paths : {
    angular : '../../bower_components/angular/angular',
    'angular-animate' : '../../bower_components/angular-animate/angular-animate',
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
    'angular-animate' : ['angular'],
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
  // 'angular-animate', 
  'angular-touch'
  ], function(angular, app, ngRoute, ngCookies, ngSanitize, ngResource, /*ngAnimate,*/ ngTouch) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});


/*
 $(document).ready(function() {
  if ($("html").hasClass("si")) {
    var classes = ["si-1", "si-2", "si-3", "si-4", "si-5", "si-6", "si-7", "si-8", "si-9", "si-10"];

    $("html").each(function() {
      $(".cont").addClass(classes[~~(Math.random() * classes.length)]);
    });
  } else {
    var classes = ["no-1", "no-2", "no-3", "no-4", "no-5", "no-6", "no-7", "no-8", "no-9", "no-10"];
    $("html").each(function() {
      $(".cont").addClass(classes[~~(Math.random() * classes.length)]);
    });
  };

});

$(".menu,.close").click(function() {
  $(".menu-cont,.cont").toggleClass("opened");
});

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
    $("html").addClass("isMobile iOS");
  } else if (userAgent.match(/Android/i)) {
    $("html").addClass("isMobile android");
  }
}
getMobileOperatingSystem();



$('.cont').imagesLoaded({
  background: true
}, function() {
  $('body').removeClass('loading').addClass('loaded').one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
      $('.overlay').css("display", "none");

    });
});
*/
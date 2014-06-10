var ArtistsApp;

ArtistsApp = angular.module("ArtistsApp", ["ngResource", "ngSanitize", "ngRoute", "ngAnimate"]);

ArtistsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/artists/:id', {
      templateUrl: 'artist.html',
      controller: 'ShowCtrl'
    }).
    when('/homepage', {
      templateUrl: 'homepage.html',
      controller: 'ArtistsCtrl'
    }).
    otherwise({
      redirectTo: '/homepage'
    });
  }]);

ArtistsApp.animation('.fade', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(500, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(500, done)
      return function() {
        element.stop();
      }
    }
  }
})


var initializeAngularParallax = function($rootScope){
  if(window.location.toString().indexOf('homepage') != -1){
    initializeParallax();
  } else {
    $(window).unbind('scroll');
  }
}
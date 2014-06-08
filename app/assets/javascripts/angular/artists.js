var ArtistsApp;

ArtistsApp = angular.module("ArtistsApp", ["ngResource", "ngSanitize", "ngRoute"]);

ArtistsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/artists/:id', {
        templateUrl: 'artist.html'
      }).
      when('/homepage', {
        templateUrl: 'homepage.html'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);

ArtistsApp.controller("ArtistsCtrl", ['$scope', "$sce", "$location", "ArtistFactory", function($scope, $sce, $location, ArtistFactory) {
  $scope.initializeActiveArtist = function() {
    angular.forEach($scope.artists, function(artist) {
      if(artist.id == parseInt($location.path().replace("/",""))){
        artist.active = true;
      }
    });
  };

  $scope.artistPath = function(artist){
    $location.path(artist.id)
  };

  $scope.setPath = function(hash){
    $scope.currentPage = hash;
    $location.path(hash);
  };

  $scope.activeArtist = function(){
    return $scope.artists.filter(function(a){ return a.active == true })[0]
  };

  $scope.artists = ArtistFactory.query();
  $scope.artists.$promise.then( function(){
    $scope.initializeActiveArtist();
  })

} ])

ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])


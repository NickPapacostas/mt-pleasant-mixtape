var ArtistsApp;

ArtistsApp = angular.module("ArtistsApp", ["ngResource", "ngSanitize", "ngRoute"]);

ArtistsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/artists/:id', {
      templateUrl: 'artist.html',
      controller: 'ArtistsCtrl'
    }).
    when('/homepage', {
      templateUrl: 'homepage.html',
      controller: 'ArtistsCtrl'
    }).
    otherwise({
      redirectTo: '/homepage'
    });
  }]);

ArtistsApp.controller("ArtistsCtrl", ['$scope', "$sce", "$location", "$routeParams", "ArtistFactory", function($scope, $sce, $location, $routeParams, ArtistFactory) {
  $scope.initializeActiveArtist = function() {
    if($location.path().indexOf('artists') != -1){
      if($scope.artists){
        angular.forEach($scope.artists, function(artist) {
          if(artist.id == parseInt($routeParams.id)){
            artist.active = true;
            $scope.activeArtist = artist
          }
        })

      }
    }
  };

  $scope.artistsPromise = ArtistFactory.query();
  $scope.artistsPromise.$promise.then( function(data){
    $scope.artists = data;
    $scope.initializeActiveArtist();
  });

} ])

ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])


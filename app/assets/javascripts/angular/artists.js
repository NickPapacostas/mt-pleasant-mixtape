var ArtistsApp;

ArtistsApp = angular.module("ArtistsApp", ["ngResource", "ngSanitize"]);

ArtistsApp.controller("ArtistsCtrl", ['$scope', "$sce", "$location", "ArtistFactory", function($scope, $sce, $location, ArtistFactory) {
  $scope.artists = ArtistFactory.query();
  $scope.currentPage = $location.path();

  $scope.setActiveArtist = function(artist) {
    if($scope.activeArtist == artist){
      $scope.activeArtist = undefined;
    } else {
      $scope.activeArtist = artist;
    }
  }

  $scope.setPath = function(hash){
    $scope.currentPage = hash;
    $location.path(hash);
  };
} ])

ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])


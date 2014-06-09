var ArtistsApp;

ArtistsApp = angular.module("ArtistsApp", ["ngResource", "ngSanitize", "ngRoute"]);

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


ArtistsApp.controller("ArtistsCtrl",
  ['$scope', "$sce", "$location", "$routeParams", "ArtistFactory",
  function($scope, $sce, $location, $routeParams, ArtistFactory) {
    $scope.artistsPromise = ArtistFactory.query();
    $scope.artistsPromise.$promise.then( function(data){
      $scope.artists = data;
    });
  }
]);

ArtistsApp.controller("ShowCtrl",
  ['$scope', '$location', '$routeParams',
  function($scope, $location, $routeParams) {
    $scope.initializeActiveArtist = function(parent_artists) {
      if($location.path().indexOf('artists') != -1){
        if(parent_artists){
          angular.forEach(parent_artists, function(artist) {
            if(artist.id == parseInt($routeParams.id)){
              artist.active = true;
              $scope.activeArtist = artist
            }
          });
        }
      }
    }

    $scope.$parent.artistsPromise.$promise.then( function(data){
      $scope.parent_artists = data;
      $scope.initializeActiveArtist($scope.parent_artists);
    });
  }
]);

ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])


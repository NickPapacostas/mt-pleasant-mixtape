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
  ['$scope', '$location', '$routeParams', '$anchorScroll', "$sce",
  function($scope, $location, $routeParams, $anchorScroll, $sce) {
    // scroll top
    $anchorScroll();

    var sortArtists = function(artists) {
      return artists.sort(function(a, b){
        return parseInt(a.id) - parseInt(b.id)
      });
    };

    $scope.initializeNextArtist = function(){
      var sortedArtists = sortArtists($scope.parent_artists);
      console.log(sortedArtists)
      var activeArtistIndex = sortedArtists.indexOf($scope.activeArtist);
      console.log(activeArtistIndex)
      $scope.nextArtist = sortedArtists[activeArtistIndex + 1]
    }

    $scope.initializeActiveArtist = function() {
      if($location.path().indexOf('artists') != -1){
        if($scope.parent_artists){
          angular.forEach($scope.parent_artists, function(artist) {
            if(artist.id == parseInt($routeParams.id)){
              artist.active = true;
              var rootSoundCloudPlayerUrl = "https://w.soundcloud.com/player/?url=";
              artist.song_iframe_url = $sce.trustAsResourceUrl(rootSoundCloudPlayerUrl + artist.song_url);
              $scope.activeArtist = artist
            }
          });
          $scope.initializeNextArtist();
        }
      }
    }

    $scope.$parent.artistsPromise.$promise.then( function(data){
      $scope.parent_artists = data;
      $scope.initializeActiveArtist();
    });
  }
]);

ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])


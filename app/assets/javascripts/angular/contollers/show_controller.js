ArtistsApp.controller("ShowCtrl",
  ['$scope', '$location', '$routeParams', '$anchorScroll', "$sce",
  function($scope, $location, $routeParams, $anchorScroll, $sce) {
    $anchorScroll();
    initializeAngularParallax($scope);

    var sortArtists = function(artists) {
      return artists.sort(function(a, b){
        return parseInt(a.id) - parseInt(b.id)
      });
    };

    $scope.initializeNextArtist = function(){
      var sortedArtists = sortArtists($scope.parent_artists);
      var activeArtistIndex = sortedArtists.indexOf($scope.activeArtist);
      if(activeArtistIndex == sortedArtists.length - 1){
        nextArtistIndex = 0
      } else {
        nextArtistIndex = activeArtistIndex + 1
      }
      $scope.nextArtist = sortedArtists[nextArtistIndex];
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

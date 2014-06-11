ArtistsApp.controller("ArtistsCtrl",
  ['$scope', "$sce", "$location", "$routeParams", '$rootScope', "$anchorScroll", "ArtistFactory",
  function($scope, $sce, $location, $routeParams, $rootScope, $anchorScroll, ArtistFactory) {
    initializeAngularParallax($rootScope);
    $scope.artistsPromise = ArtistFactory.query();
    $scope.artistsPromise.$promise.then( function(data){
      $scope.artists = data;
    });

    $scope.hideMenu = true;
    $scope.scrollTo = function(id){
      $('html, body').animate({
        scrollTop: $("#" + id).offset().top
      }, 2000);
    };
  }]);
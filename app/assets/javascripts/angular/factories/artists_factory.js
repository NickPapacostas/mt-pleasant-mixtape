ArtistsApp.factory("ArtistFactory", ['$resource', function($resource) {
  return $resource("/artists.json");
}])

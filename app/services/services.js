//var textureApp = angular.module('tsearchUiApp', ['ngResource']);

/*
textureApp.factory('textureService', ['$resource',
  function($resource) {
    return new Texture($resource);
  }    
]);

textureApp.service('textureDataService', function($http) {
   this.getData = function() {
      return $http({
          method: 'GET',
          url: 'http://localhost:8080/tsearch.rest/rest/texture/all',
         // params: 'limit=10, sort_by=created:desc',
         // headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      }).success(function(data){
        return data;
      }).error(function(){
         alert("error");
         return null ;
      });
   }
 });
/*
function Texture(resource) {
  this.resource = resource;
  this.createTexture = function(texture, scope) {
    // 
    // Save Action Method
    //
    var Texture = resource('/textures/new');
    Texture.save(texture, function(response) {
      scope.message = response.message;
    });
  }
  this.getTexture = function(id, scope) {
    //
    // GET Action Method
    //
    var Texture = resource('/textures/:textureId', {
      textureId: '@textureId'
    });
    Texture.get({
      textureId: id
    }, function(texture) {
      scope.texture = texture;
    })
  }
  this.getTextures = function(scope) {
    //
    // Query Action Method
    //
    var Textures = resource('/textures/all');
    Textures.query(function(textures) {
      scope.textures = textures;
    });
  }
}*/
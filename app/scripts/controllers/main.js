'use strict';

/**
 * @ngdoc function
 * @name tsearchUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tsearchUiApp
 */
angular.module('tsearchUiApp')
  .controller('MainCtrl', function($scope, $http) {
  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
  ];   
  
  var headerParams = {
    'Access-Control-Allow-Origin' : '*',
    'Content-Type' : 'application/x-www-form-urlencoded'
  };
  
  $http({
     method: 'GET',
     headers : headerParams,
     url: 'http://localhost:8080/tsearch.rest/rest/texture/all'
     }).then(function success(response) {
        $scope.textures = response.data;
     }, function err(response) {
        console.log('error is here:' + response);
     });
  
  $scope.editOp = function(id) {
    console.log('edit called here');
      $scope.add = false; $scope.edit = true;
      $http({
     method: 'GET',
     headers : headerParams,
     url: 'http://localhost:8080/tsearch.rest/rest/texture/show/' + id
     }).then(function success(response) {
      $scope.showAdd = true;
      $scope.hiddenId = response.data.id;
      $scope.title = response.data.title;
      $scope.content = response.data.content;
          
     }, function err(response) {
        console.log('error is here:' + response);
     });
  };
  
  $scope.addNew = function() {
    $scope.title  = '';  $scope.content = '';
    $scope.add = true; $scope.edit = false;
    
      if ($scope.showAdd) {
          $scope.showAdd = false;
      } else {
         $scope.showAdd = true;
      }
  };
  
 
  
  var resetAndClose = function(){
     $scope.title  = '';  $scope.content = '';
     $scope.showAdd = false;
     $scope.showError = false;
  }
  
  var showError = function(response, $scope){
    if (response.data.indexOf('ERROR_') > -1 ) {
        $scope.title  = '';  $scope.content = '';
        $scope.showError = true;
    } 
  }
  
  $scope.addOp = function(){
    console.log('add function inside...');
      
    if ($scope.add) {
       console.log('add here...');
       console.log('title ..'+$scope.title);
        console.log('content ..'+$scope.content);
      $http({
       method: 'POST',
       headers : headerParams,
       params: {
         title: $scope.title,
         content: $scope.content
       },
       url: 'http://localhost:8080/tsearch.rest/rest/texture/add'
       }).then(function success(response) {
         
          var inserted = response.data;
          if(angular.isObject(inserted)){
            console.log('obje add called');
            if (!$scope.textures) {
               $scope.textures = {}
            }
            $scope.textures.push({
              id : inserted.id,
              title : inserted.title,
              content : inserted.content
            });
            resetAndClose($scope);
          } else {
           showError(response, $scope);
          }
       }, function err(response) {
          console.log('error is here:' + response.data);
       });
    } else if($scope.edit){
      console.log('edit here...');
      
      $http({
       method: 'POST',
       headers : headerParams,
       params: {
         id: $scope.hiddenId,
         title: $scope.title,
         content: $scope.content
       },
       url: 'http://localhost:8080/tsearch.rest/rest/texture/update'
       }).then(function success(response) {
         
          var inserted = response.data;
          if(angular.isObject(inserted)){
            
            angular.forEach($scope.textures, function(texture) {
               if (texture.id === inserted.id) {
                  texture.title = inserted.title;
                  texture.content = inserted.content;
               }
            });
            resetAndClose($scope);
          } else {
             showError(response, $scope);
          }
       }, function err(response) {
          console.log('error is here:' + response.data);
       });
    }

  };
  

  
});
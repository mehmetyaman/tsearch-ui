'use strict';

/**
 * @ngdoc function
 * @name tsearchUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tsearchUiApp
 */
angular.module('tsearchUiApp')
  .controller('LoginCtrl', function ($scope) {
  
      $scope.doLogin = function() {
        window.location.href = 'main.html';
     };
    
  });

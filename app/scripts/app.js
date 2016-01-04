'use strict';

/**
 * @ngdoc overview
 * @name tsearchUiApp
 * @description
 * # tsearchUiApp
 *
 * Main module of the application.
 */
angular
  .module('tsearchUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
    /*
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })*/
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/plain, */*';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded ,application/json';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded ,application/json';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded ,application/json';
    $httpProvider.defaults.useXDomain = true;

  });

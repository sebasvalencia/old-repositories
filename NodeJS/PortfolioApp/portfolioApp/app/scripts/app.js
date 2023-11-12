'use strict';

/**
 * @ngdoc overview
 * @name portafolioApp
 * @description
 * # portafolioApp
 *
 * Main module of the application.
 */
angular
  .module('portafolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus'
      })
      .when('/formAssets', {
        templateUrl: 'views/formAsset.html',
        controller: 'formAssetCtrl',
        controllerAs: 'formasset'
      })
      .when('/listAssets', {
        templateUrl: 'views/listAsset.html',
        controller: 'listAssetCtrl',
        controllerAs: 'listasset'
      })
      .when('/listLiabilities', {
        templateUrl: 'views/listLiabilities.html',
        controller: 'listLiabilitiesCtrl',
        controllerAs: 'listliabilities'
      })
      .when('/formLiabilities', {
        templateUrl: 'views/formLiabilities.html',
        controller: 'formLiabilitiesCtrl',
        controllerAs: 'formliabilities'
      })
      .when('/listComparison', {
        templateUrl: 'views/comparison.html',
        controller: 'listComparisonCtrl',
        controllerAs: 'listcomparison'
      })
      .otherwise({
        redirectTo: '/'
      });


    //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers = {};
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';


  });

'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('ContactusCtrl', function ($scope, $location, serviceContactus) {

    $scope.contactus = {};

    $scope.init = function () {

    };

    $scope.saveFeedback = function (contactus) {
      serviceContactus.saveContactus(contactus).then(
        function (response) {
          console.log("Contactus created!");
          if (response.$resolved) {
            console.log('redirecciona al home');
            $scope.redirectHome();
          } else {
            console.log('error al ingresar el contact');
            $scope.redirectHome();
          }
        });
    };

    $scope.redirectHome = function () {
      $location.path('/');
    };



  });

'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:liabilitiesCtrl
 * @description
 * # liabilitiesCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('formLiabilitiesCtrl', function ($scope, $location, serviceLiabilities, DataActual) {

    $scope.liabilities = {};

    $scope.init = function () {
      $scope.liabilities = {};
      $scope.liabilities = DataActual.liabilities();
      if (!(!!$scope.liabilities)) {
        $scope.liabilities = DataActual.createNewLiabilities();
      }
      console.log("$scope.liabilities", $scope.liabilities);
    };

    $scope.editLiabilities = function (liabilities) {
      $scope.redirectEditFormLiabilities();
    };

    $scope.saveLiabilities = function (liabilities) {
      if (!!liabilities._id) {
        serviceLiabilities.updateLiabilities(liabilities).then(
          function (response) {
            console.log("Liabilities updated!");
            if (response.$resolved) {
              console.log('redirecciona al home de liabilities');
              $scope.redirectListLiabilities();
            } else {
              console.log('error al actualizar el liabilities');
              $scope.redirectHome();
            }
          });
      } else {
        serviceLiabilities.saveLiabilities(liabilities).then(
          function (response) {
            console.log("Liabilities created!");
            if (response.$resolved) {
              console.log('redirecciona al home de liabilities');
              $scope.redirectListLiabilities();
            } else {
              console.log('error al ingresar el liabilities');
              $scope.redirectHome();
            }
          });
      }
    };

    $scope.redirectEditFormLiabilities = function () {
      $location.path('/formLiabilities');
    };

    $scope.redirectAddFormLiabilities = function () {
      $location.path('/formLiabilities');
    };

    $scope.redirectListLiabilities = function () {
      $location.path('/listLiabilities');
    };

    $scope.redirectHome = function () {
      $location.path('/');
    };



  });

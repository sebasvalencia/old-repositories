'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:assetCtrl
 * @description
 * # assetCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('formAssetCtrl', function ($scope, $location, serviceAsset, DataActual) {

    $scope.asset = {};

    $scope.init = function () {
      $scope.asset = {};
      $scope.asset = DataActual.asset();
      if (!(!!$scope.asset)) {
        $scope.asset = DataActual.createNewAsset();
      }
      console.log("$scope.asset", $scope.asset);
    };

    $scope.editAsset = function (asset) {
      $scope.redirectEditFormAsset();
    };

    $scope.saveAsset = function (asset) {
      if (!!asset._id) {
        serviceAsset.updateAsset(asset).then(
          function (response) {
            console.log("Asset updated!");
            if (response.$resolved) {
              console.log('redirecciona al home de asset');
              $scope.redirectListAsset();
            } else {
              console.log('error al actualizar el asset');
              $scope.redirectHome();
            }
          });
      } else {
        serviceAsset.saveAsset(asset).then(
          function (response) {
            console.log("Asset created!");
            if (response.$resolved) {
              console.log('redirecciona al home de asset');
              $scope.redirectListAsset();
            } else {
              console.log('error al ingresar el asset');
              $scope.redirectHome();
            }
          });
      }
    };

    $scope.redirectEditFormAsset = function () {
      $location.path('/formAssets');
    };

    $scope.redirectAddFormAsset = function () {
      $location.path('/formAssets');
    };

    $scope.redirectListAsset = function () {
      $location.path('/listAssets');
    };

    $scope.redirectHome = function () {
      $location.path('/');
    };



  });

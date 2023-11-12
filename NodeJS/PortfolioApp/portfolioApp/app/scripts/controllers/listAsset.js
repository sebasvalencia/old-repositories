'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:assetCtrl
 * @description
 * # assetCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('listAssetCtrl', function ($scope, $location, serviceAsset, DataActual) {

    $scope.assetListData = [];
    $scope.asset = {};

    $scope.init = function () {
      $scope.listAsset();
    };

    $scope.editAsset = function (asset) {
      $scope.asset = DataActual.setAsset(asset);
      $scope.redirectEditFormAsset();
    };

    $scope.listAsset = function () {
      var assetList = [];
      serviceAsset.listAsset().then(
        function (response) {
          if (response.$resolved) {
            assetList = response.$promise.$$state.value;
            for (var i = 0; i < assetList.length; i++) {
              $scope.assetListData.push(assetList[i]);
            }
            //console.log('redirecciona al home de asset');
          } else {
            console.log('error al listar el asset');
            $scope.redirectHome();
          }
        }
      );
    };

     $scope.deleteAsset = function (asset) {
      serviceAsset.deleteAsset(asset).then(
        function (response) {
          console.log("Asset deleted!");
          if (response.$resolved) {
            console.log('redirecciona al home de asset');
            var index = $scope.assetListData.indexOf(asset);
            $scope.assetListData.splice(index,1);
            //$scope.redirectListAsset();
          } else {
            console.log('error al eliminar el asset');
          }
        }
      );
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

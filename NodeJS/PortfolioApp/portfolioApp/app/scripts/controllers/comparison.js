'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:assetCtrl
 * @description
 * # assetCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('listComparisonCtrl', function ($scope, $location, serviceAsset, serviceLiabilities, DataActual) {

    $scope.assetListData = [];
    $scope.asset = {};
    $scope.liabilitiesListData = [];
    $scope.liabilities = {};

    $scope.init = function () {
      $scope.listAsset();
      $scope.listLiabilities();

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

    $scope.listLiabilities = function () {
      var liabilitiesList = [];
      serviceLiabilities.listLiabilities().then(
        function (response) {
          if (response.$resolved) {
            liabilitiesList = response.$promise.$$state.value;
            for (var i = 0; i < liabilitiesList.length; i++) {
              $scope.liabilitiesListData.push(liabilitiesList[i]);
            }
            //console.log('redirecciona al home de liabilities');
          } else {
            console.log('error al listar el liabilities');
            $scope.redirectHome();
          }
        }
      );
    };

    $scope.redirectHome = function () {
      $location.path('/');
    };

     
  });

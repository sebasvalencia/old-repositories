'use strict';

/**
 * @ngdoc function
 * @name portafolioApp.controller:liabilitiesCtrl
 * @description
 * # liabilitiesCtrl
 * Controller of the portafolioApp
 */
angular.module('portafolioApp')
  .controller('listLiabilitiesCtrl', function ($scope, $location, serviceLiabilities, DataActual) {

    $scope.liabilitiesListData = [];
    $scope.liabilities = {};

    $scope.init = function () {
      $scope.listLiabilities();
    };

    $scope.editLiabilities = function (liabilities) {
      $scope.liabilities = DataActual.setLiabilities(liabilities);
      $scope.redirectEditFormLiabilities();
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

     $scope.deleteLiabilities = function (liabilities) {
      serviceLiabilities.deleteLiabilities(liabilities).then(
        function (response) {
          console.log("Liabilities deleted!");
          if (response.$resolved) {
            console.log('redirecciona al home de liabilities');
            var index = $scope.liabilitiesListData.indexOf(liabilities);
            $scope.liabilitiesListData.splice(index,1);
          } else {
            console.log('error al eliminar el liabilities');
          }
        }
      );
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

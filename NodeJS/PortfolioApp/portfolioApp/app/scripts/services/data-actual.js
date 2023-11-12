'use strict';

angular.module('portafolioApp')
  .service('DataActual', function () {

    var _asset = undefined;
    var _liabilities = undefined;

    this.createNewAsset = function () {
      _asset = {};
      return _asset;
    };

    this.setAsset = function (asset) {
      _asset = asset;
    };

    this.asset = function () {
      return _asset;
    };

    this.createNewLiabilities = function () {
      _liabilities = {};
      return _liabilities;
    };

    this.setLiabilities = function (liabilities) {
      _liabilities = liabilities;
    };

    this.liabilities = function () {
      return _liabilities;
    };

  });
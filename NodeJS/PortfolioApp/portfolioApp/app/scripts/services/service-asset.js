'use strict';

angular.module('portafolioApp')
    .service('serviceAsset', function ($q, restAsset) {

        this.saveAsset = function (asset) {
            var d = $q.defer();
            var objSend = {};

            objSend.name = asset.name;
            objSend.bank = asset.bank;
            objSend.investmentValue = asset.investmentValue;
            objSend.acquisitionDate = asset.acquisitionDate;
            objSend.expirationDate = asset.expirationDate;
            objSend.monthlyPayment = asset.monthlyPayment;
            objSend.rate = asset.rate;
            objSend.valueShare = asset.valueShare;
            objSend.numberShare = asset.numberShare;

            console.log('objSend', objSend);
            /*
            var assetObj = {
                "name":"CDT16",
                "bank":"Bank16",
                "investmentValue":"10000000",
                "acquisitionDate":"20/05/2016",
                "expirationDate":"20/05/2017"
            };
            console.log('assetObj', assetObj);*/

            restAsset.saveAsset({}, objSend,
                function (response) {
                    if (response) {
                        d.resolve(response);
                    } else {
                        d.reject();
                    }
                }, function () {
                    d.reject();
                });
            return d.promise;
        };

        this.listAsset = function () {
            var d = $q.defer();
            restAsset.listAsset(
                function (response) {

                    if (response) {
                        d.resolve(response);
                    } else {
                        d.reject();
                    }
                }, function () {
                    d.reject();
                });
            return d.promise;
        };

        this.updateAsset = function (asset) {
            var d = $q.defer();
            var objSend = {};

            objSend.name = asset.name;
            objSend.bank = asset.bank;
            objSend.investmentValue = asset.investmentValue;
            objSend.acquisitionDate = asset.acquisitionDate;
            objSend.expirationDate = asset.expirationDate;
            objSend.monthlyPayment = asset.monthlyPayment;
            objSend.rate = asset.rate;
            objSend.valueShare = asset.valueShare;
            objSend.numberShare = asset.numberShare;

            var id = { id: asset._id };
            restAsset.updateAsset(id, objSend,
                function (response) {
                    if (response) {
                        d.resolve(response);
                    } else {
                        d.reject();
                    }
                }, function () {
                    d.reject();
                });
            return d.promise;
        };

        this.deleteAsset = function (asset) {
            var d = $q.defer();
            var id = { id: asset._id };
            restAsset.deleteAsset(id,
                function (response) {
                    if (response) {
                        d.resolve(response);
                    } else {
                        d.reject();
                    }
                }, function () {
                    d.reject();
                });
            return d.promise;
        };






    });


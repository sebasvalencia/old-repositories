'use strict';

angular.module('portafolioApp')
    .service('serviceLiabilities', function ($q, restLiabilities) {

        this.saveLiabilities = function (liabilities) {
            var d = $q.defer();
            var objSend = {};

            objSend.name = liabilities.name;
            objSend.bank = liabilities.bank;
            objSend.value = liabilities.value;
            objSend.acquisitionDate = liabilities.acquisitionDate;
            objSend.expirationDate = liabilities.expirationDate;
            objSend.monthlyPayment = liabilities.monthlyPayment;
            objSend.interests = liabilities.interests;

            console.log('objSend', objSend);
            /*
            var liabilitiesObj = {
                "name":"CDT16",
                "bank":"Bank16",
                "investmentValue":"10000000",
                "acquisitionDate":"20/05/2016",
                "expirationDate":"20/05/2017"
            };
            console.log('liabilitiesObj', liabilitiesObj);*/

            restLiabilities.saveLiabilities({}, objSend,
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

        this.listLiabilities = function () {
            var d = $q.defer();
            restLiabilities.listLiabilities(
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

        this.updateLiabilities = function (liabilities) {
            var d = $q.defer();
            var objSend = {};

            objSend.name = liabilities.name;
            objSend.bank = liabilities.bank;
            objSend.value = liabilities.value;
            objSend.acquisitionDate = liabilities.acquisitionDate;
            objSend.expirationDate = liabilities.expirationDate;
            objSend.monthlyPayment = liabilities.monthlyPayment;
            objSend.interests = liabilities.interests;

            var id = { id: liabilities._id };
            restLiabilities.updateLiabilities(id, objSend,
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

        this.deleteLiabilities = function (liabilities) {
            var d = $q.defer();
            var id = { id: liabilities._id };
            restLiabilities.deleteLiabilities(id,
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


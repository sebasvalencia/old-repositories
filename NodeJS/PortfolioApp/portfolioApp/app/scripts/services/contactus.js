'use strict';

angular.module('portafolioApp')
    .service('serviceContactus', function ($q, restContactus) {

        this.saveContactus = function (contactus) {
            console.log("contactus", contactus);
            var d = $q.defer();
            var objSend = {};

            objSend.firstName = contactus.firstName;
            objSend.lastName = contactus.lastName;
            objSend.telnumber = contactus.telnumber;
            objSend.email = contactus.email;
            objSend.comments = contactus.comments;

            console.log('objSend', objSend);

            restContactus.saveContactus({}, objSend,
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
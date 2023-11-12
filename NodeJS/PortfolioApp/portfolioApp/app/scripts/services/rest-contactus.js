'use strict';

angular.module('portafolioApp')
    .service('restContactus', function ($resource, Constants) {
        return $resource(Constants.contextLocal + '/contactus/:id', { id: '@id' },
            {
                saveContactus: {
                    method: 'POST',
                    url: Constants.contextLocal + '/contactus'
                }
            });
    });

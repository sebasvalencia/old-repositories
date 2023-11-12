'use strict';

angular.module('portafolioApp')
    .service('restLiabilities', function ($resource, Constants) {
        return $resource(Constants.contextLocal + '/liabilities/:id', { id: '@id' },
            {
                saveLiabilities: {
                    method: 'POST',
                    url: Constants.contextLocal + '/liabilities'
                },
                listLiabilities: {
                    method: 'GET',
                    url: Constants.contextLocal + '/liabilities',
                    isArray: true 
                },
                updateLiabilities: {
                    method: 'PUT',
                    url: Constants.contextLocal + '/liabilities/:id'
                },
                deleteLiabilities: {
                    method:'DELETE',
                    url: Constants.contextLocal + '/liabilities/:id'
                }
            });
    });

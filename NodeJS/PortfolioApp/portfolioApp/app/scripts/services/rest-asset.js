'use strict';

angular.module('portafolioApp')
    .service('restAsset', function ($resource, Constants) {
        return $resource(Constants.contextLocal + '/assets/:id', { id: '@id' },
            {
                saveAsset: {
                    method: 'POST',
                    url: Constants.contextLocal + '/assets'
                },
                listAsset: {
                    method: 'GET',
                    url: Constants.contextLocal + '/assets',
                    isArray: true 
                },
                updateAsset: {
                    method: 'PUT',
                    url: Constants.contextLocal + '/assets/:id'
                },
                deleteAsset: {
                    method:'DELETE',
                    url: Constants.contextLocal + '/assets/:id'
                }
            });
    });

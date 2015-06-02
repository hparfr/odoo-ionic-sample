'use strict';


angular.module('starter').factory('production', ['$q', 'jsonRpc', function ($q, jsonRpc) {
    
    var mrpProduction = jsonRpc.syncImportObject({
          model: 'mrp.production',
          func_key: 'auto',
          domain: [['state', 'in', ['ready']]],
          limit: 50,
          interval: 5000,
    });

    return $q(function(resolve, reject) {
        mrpProduction.watch(function () {
            return resolve(mrpProduction);
        });
    });
}]);
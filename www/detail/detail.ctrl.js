'use strict';
angular.module('starter')
    .controller('DetailCtrl', ['$scope', '$stateParams', 'jsonRpc', '$state', 'production', function ($scope, $stateParams, jsonRpc, $state, production) {
        $scope.item = production.data[$stateParams.id];
        
        $scope.confirm = function() {
            jsonRpc.call('mrp.production', 'prodoo_produce', [$scope.item.id], {})
                .then(function() {
                    delete production.data[$scope.item.id];
                    $state.go('list');
                }
            )
        }
}]);

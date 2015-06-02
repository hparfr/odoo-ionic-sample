'use strict';
angular.module('starter')
    .controller('DetailCtrl', ['$scope', '$stateParams', 'jsonRpc', '$state', 'blockUI', function ($scope, $stateParams, jsonRpc, $state, blockUI) {
        $scope.item = $scope.mrpProduction.data[$stateParams.id];
        $scope.confirm = function() {
            jsonRpc.call('mrp.production', 'prodoo_produce', [$scope.item.id], {})
                .then(function() {
                    delete $scope.mrpProduction.data[$scope.item.id]
                    $state.go('list');
                }
            )
        }
}]);

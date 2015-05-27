'use strict';


angular.module('starter').controller('ListCtrl', ['$scope', 'jsonRpc', function ($scope, jsonRpc) {
	console.log('ctrl !');
	$scope.list = null;
	jsonRpc.call('mrp.workcenter', 'prodoo_get_workcenter', []).then(function (data) {
		console.log('data !!', data);
		$scope.list = data;
	});
}]);
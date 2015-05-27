'use strict';


angular.module('starter').controller('DetailCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
	console.log('ctrl !', $stateParams.id);
}]);
'use strict';


angular.module('starter').controller('ListCtrl', ['$scope', 'production', function ($scope, production) {
	$scope.mrpProduction = production.data;
}]);

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router', 'odoo'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.run(['jsonRpc', '$state', '$rootScope', function (jsonRpc, $state, $rootScope) {
  jsonRpc.errorInterceptors.push(function (a) {
    $state.go('login');
    console.log('error : ', a);  
  });

}])
.config(['$stateProvider','$urlRouterProvider' , function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/',
    templateUrl: 'list/list.html',
    controller: 'ListCtrl',
    resolve: {
      production: 'production'
    }
  }).state('detail', {
    url: '/detail/{id}',
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl',
    resolve: {
      production: 'production'
    }
  }).state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
  $urlRouterProvider.otherwise('/');
}]);


angular
.module('angularMeteor')
.config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'client/views/main.ng.html',
    controller: 'MainCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'client/views/login.ng.html',
    controller: 'LoginCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'client/views/login.ng.html',
    controller: 'LoginCtrl'
  })
  .state('messages', {
    url: '/messages',
    templateUrl: 'client/views/messages.ng.html',
    controller: 'MessagesCtrl'
  });

};

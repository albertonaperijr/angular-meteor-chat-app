

angular
.module('angularMeteor')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$log', 'accountFactory', 'codeManagerFactory', 'loginFactory'];

function LoginCtrl($rootScope, $scope, $state, $log, accountFactory, codeManagerFactory, loginFactory) {

  var controllerName = 'LoginCtrl';
  $log.log(controllerName, 'Logged User', Meteor.userId());
  $scope.user = {};

  if (Meteor.userId()) {
    $log.log(controllerName, 'User logged in');
    $state.go('home');
  }

  $scope.subscribe('users');
  $scope.helpers({
    users: function() {
      return Meteor.users.find({});
    }
  });

  $scope.login = function() {
    if (!$scope.loginClicked) {
      $scope.loginClicked = true;
      $log.log(controllerName, 'login', $scope.user);
      if ($rootScope.isEmptyObject($scope.user)) {
        $log.error(controllerName, 'Null user');
        $scope.loginClicked = false;
        $scope.registerClicked = false;
      } else if (!$scope.user.email || !$scope.user.password) {
        $log.error(controllerName, 'Null email or null password');
        $scope.loginClicked = false;
        $scope.registerClicked = false;
      } else {
        loginFactory.loginUser($scope.user.email, $scope.user.password)
        .then(function(error) {
          if (!error) {
            $log.info(controllerName, 'Success in logging in', Meteor.user(), Meteor.userId(), Meteor.users);
            $state.go('home');
          } else {
            $log.error(controllerName, 'Error in logging in', error);
          }
          $scope.loginClicked = false;
          $scope.registerClicked = false;
        }, function(error) {
          $scope.loginClicked = false;
          $scope.registerClicked = false;
        });
      }
    }
  };

  $scope.register = function() {
    if (!$scope.registerClicked) {
      $scope.registerClicked = true;
      $log.log(controllerName, 'Register', $scope.user);

      if (!$scope.user.email || !$scope.user.password) {
        $log.log(controllerName, 'Register : Invalid Parameter');
        $scope.registerClicked = false;
      } else {
        accountFactory.createAccount($scope.user)
        .then(function(error) {
          if (!error) {
            $log.info(controllerName, 'Success in creating account');
            $scope.login();
          } else {
            $log.error(controllerName, 'Error in creating account', error);
            $scope.registerClicked = false;
          }
        });
      }
    }
  };

};

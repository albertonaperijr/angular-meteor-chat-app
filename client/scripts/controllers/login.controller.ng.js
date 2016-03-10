

angular
.module('angularMeteor')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$log', 'accountFactory', 'codeManagerFactory', 'loginFactory'];

function LoginCtrl($rootScope, $scope, $state, $log, accountFactory, codeManagerFactory, loginFactory) {

  var controllerName = 'LoginCtrl';
  $log.log(controllerName, 'Logged User', Meteor.userId());
  $scope.user = {
    username: null,
    profile: {name: null}
  };

  DocHead.setTitle('Simple chat app by Alberto Naperi Jr.');

  if (Meteor.userId()) {
    $log.log(controllerName, 'User logged in');
    $state.go('home');
  }

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
            $log.error(controllerName, 'Error in logging in | reason :', error.reason);
            $log.error(controllerName, 'Error in logging in | error :', error.error);
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
      // $scope.user.username = $scope.user.profile.name.replace(/\s+/g, '_').toLowerCase();
      // $scope.user.username = $scope.user.profile.name.split(' ').length === 1 ? $scope.user.profile.name.toLowerCase() : $scope.user.profile.name.split(' ')[0].toLowerCase() + '_' + $scope.user.profile.name.split(' ')[1].substring(0, 1).toLowerCase();
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
            $log.error(controllerName, 'Error in creating account | reason :', error.reason);
            $log.error(controllerName, 'Error in creating account | error :', error.error);
            $log.error(controllerName, 'Error in creating account', error);
            $scope.registerClicked = false;
          }
        });
      }
    }
  };

  $scope.loginWith = function(oauthProvider) {
    // if (!$scope.loginWithClicked) {
    //   $scope.loginWithClicked = true;
    $log.log(controllerName, 'loginWith', oauthProvider);
    loginFactory.loginWithService(oauthProvider)
    .then(function(error) {
      if (!error) {
        $log.info(controllerName, 'Success in logging in', Meteor.user(), Meteor.userId());
        $state.go('home');
      } else {
        $log.error(controllerName, 'Error in logging in', error);
      }
      $scope.loginWithClicked = false;
    }, function(error) {
      $scope.loginWithClicked = false;
    });
    // }
  };

};

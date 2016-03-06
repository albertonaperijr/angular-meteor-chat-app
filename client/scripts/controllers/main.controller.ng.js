

angular
.module('angularMeteor')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$log', '$timeout', 'codeManagerFactory', 'messageFactory'];

function MainCtrl($scope, $log, $timeout, codeManagerFactory, messageFactory) {

  var controllerName = 'MainCtrl';
  $log.log(controllerName, Messages);

  /**
  * Angular Meteor Way - Latest Code
  **/

  $scope.helpers({
    messages: function() {
      // return Messages.find({});
      return Messages.find().fetch().reverse();
    }
  });

  $scope.sendMessage = function() {
    if ($scope.message) {
      if (!$scope.message._id) {
        $log.log(controllerName, 'sendMessage create', $scope.message);
        messageFactory.createMessage($scope.message)
        .then(function(Response) {
          $log.log(controllerName, 'Response', Response);
          if (codeManagerFactory.isSuccess(Response.returnCode)) {
            $scope.clear();
          } else {
            // error
          }
        }, function(error) {
          // $log.log(controllerName, 'error', error);
        });
      } else {
        $log.log(controllerName, 'sendMessage update', $scope.message);
        messageFactory.updateMessage($scope.message)
        .then(function(Response) {
          $log.log(controllerName, 'Response', Response);
          if (codeManagerFactory.isSuccess(Response.returnCode)) {
            $scope.clear();
          } else {
            // error
          }
        }, function(error) {
          // $log.log(controllerName, 'error', error);
        });
      }
    } else {
      $log.log(controllerName, 'Null message');
    }
  };

  $scope.removeMessage = function(message) {
    $log.log(controllerName, 'removeMessage', message);
    if (message) {
      if (message._id) {
        messageFactory.removeMessage(message._id)
        .then(function(Response) {
          $log.log(controllerName, 'Response', Response);
          if (codeManagerFactory.isSuccess(Response.returnCode)) {
            $log.info(controllerName, 'removeMessage success');
          } else {
            $log.error(controllerName, 'removeMessage error');
          }
        }, function(error) {
          // $log.log(controllerName, 'error', error);
        });
      } else {

      }
    } else {

    }
  };

  $scope.removeAllMessages = function() {
    $log.log(controllerName, 'removeAllMessages');
    messageFactory.removeAllMessages()
    .then(function(Response) {
      $log.log(controllerName, 'Response', Response);
      if (codeManagerFactory.isSuccess(Response.returnCode)) {
        $log.info(controllerName, 'removeAllMessages success');
      } else {
        $log.error(controllerName, 'removeAllMessages error');
      }
    }, function(error) {
      // $log.log(controllerName, 'error', error);
    });
  };

  $scope.editMessage = function(message) {
    $log.log(controllerName, 'editMessage', message);
    $scope.helpers({
      message() {
        return Messages.findOne(message._id);
      }
    });
  };

  $scope.clear = function() {
    $timeout(function() {
      $scope.message = '';
      $log.log(controllerName, 'Messages', $scope.messages);
    });
  };

  /**
  * This is for auto bind - Angular way
  **/

  // $scope.messages = $meteor.collection(Messages);
  //
  // $scope.sendMessage = function() {
  //   $scope.messages.push($scope.message);
  //   $scope.clear();
  // };
  //
  // $scope.editMessage = function(message) {
  //   $scope.message = message;
  // };
  //
  // $scope.removeMessage = function(message) {
  //   $scope.messages.splice($scope.messages.indexOf(message), 1);
  // };

};

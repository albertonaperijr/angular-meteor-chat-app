

angular
.module('angularMeteor')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$log', '$timeout'];

function MainCtrl($scope, $log, $timeout) {

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
      if ($scope.message._id) {
        $log.log(controllerName, 'sendMessage update', $scope.message);
        Messages.update($scope.message._id, $scope.message, function(error, success) {
          $log.log(controllerName, 'success', success, 'error', error);
          if (success) {
            $scope.clear();
          } else {
            // error
          }
        });
      } else {
        $log.log(controllerName, 'sendMessage insert', $scope.message);
        Messages.insert($scope.message, function(error, success) {
          $log.log(controllerName, 'success', success, 'error', error);
          if (success) {
            $scope.clear();
          } else {
            // error
          }
        });
      }
    } else {
      $log.log(controllerName, 'Null message');
    }
  };

  $scope.editMessage = function(message) {
    $log.log(controllerName, 'editMessage', message);
    $scope.helpers({
      message() {
        return Messages.findOne(message._id);
      }
    });
  };

  $scope.removeMessage = function(message) {
    $log.log(controllerName, 'removeMessage', message);
    Messages.remove({_id: message._id}, function(error) {
      if (!error) {
        $log.log(controllerName, 'removeMessage success');
      } else {
        $log.log(controllerName, 'removeMessage error', error);
      }
    });
  };

  $scope.removeAllMessages = function() {
    $log.log(controllerName, 'removeAllMessages');
    Messages.remove({}, function(error) {
      $log.log(controllerName, 'removeAllMessages', error);
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

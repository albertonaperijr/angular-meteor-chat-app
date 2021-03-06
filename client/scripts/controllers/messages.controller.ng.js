

angular
.module('angularMeteor')
.controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$scope', '$log', '$meteor'];

function MessagesCtrl($scope, $log, $meteor) {

  var controllerName = 'MessagesCtrl';
  $log.log(controllerName);

  DocHead.setTitle('Show all messages');

  $scope.subscribe('messages');
  $scope.helpers({
    messages() {
      return Messages.find().fetch().reverse();
    }
  });

  $scope.getUser = function(userId) {
      return Meteor.users.findOne(userId);
  };

};

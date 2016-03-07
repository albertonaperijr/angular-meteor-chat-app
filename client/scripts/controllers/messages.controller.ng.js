

angular
.module('angularMeteor')
.controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$scope', '$log', '$meteor'];

function MessagesCtrl($scope, $log, $meteor) {

  var controllerName = 'MessagesCtrl';
  $log.log(controllerName);

  $scope.subscribe('messages');
  $scope.helpers({
    messages: function() {
      return Messages.find().fetch().reverse();
    }
  });

};

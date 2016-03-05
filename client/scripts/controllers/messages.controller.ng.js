

angular
.module('angularMeteor')
.controller('MessagesCtrl', MessagesCtrl);

MessagesCtrl.$inject = ['$scope', '$log', '$meteor'];

function MessagesCtrl($scope, $log, $meteor) {

  $log.log('MessagesCtrl');

  // $scope.messages = $meteor.collection(Messages);

  $scope.helpers({
    messages: function() {
      return Messages.find().fetch().reverse();
    }
  });

};



angular
.module('angularMeteor')
.controller('MaterialCtrl', MaterialCtrl);

MaterialCtrl.$inject = ['$scope', '$log'];

function MaterialCtrl($scope, $log) {

  var controllerName = 'MaterialCtrl';
  $log.log(controllerName);

  DocHead.setTitle('Angular Material Design');

  

};

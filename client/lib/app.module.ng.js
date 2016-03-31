

angular.module('angularMeteor', [
  'angular-meteor',
  // 'accounts.ui',
  'ngMaterial',
  'ui.router'
]);

onReady = function() {
  angular.bootstrap(document, ['angularMeteor']);
};

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

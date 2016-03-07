
angular
.module('angularMeteor')
.run(runBlock);

runBlock.$inject = ['$rootScope', '$state', '$q', '$log', 'logoutFactory'];

function runBlock($rootScope, $state, $q, $log, logoutFactory) {

  var deferred;

  // Common methods

  $rootScope.isUserLoggedin = function() {
    return Meteor.userId();
  };

  $rootScope.userDetails = function() {
    return Meteor.user();
  };

  $rootScope.isEmptyObject = function(object) {
    return $.isEmptyObject(object);
  };

  $rootScope.isState = function(state) {
    return $state.is(state);
  };

  // Create Update Delete

  $rootScope.logout = function() {
    deferred = $q.defer();
    logoutFactory.logout()
    .then(function(error) {
      $log.log('Logout', Meteor.user(), error);
      deferred.resolve(error);
    });
    return deferred.promise;
  };

};

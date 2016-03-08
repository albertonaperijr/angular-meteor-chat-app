
angular
.module('angularMeteor')
.run(runBlock);

runBlock.$inject = ['$rootScope', '$state', '$q', '$log', 'logoutFactory'];

function runBlock($rootScope, $state, $q, $log, logoutFactory) {

  var deferred;

  // Common methods

  $rootScope.isEmptyObject = function(object) {
    return $.isEmptyObject(object);
  };

  $rootScope.isState = function(state) {
    return $state.is(state);
  };

  $rootScope.logout = function() {
    deferred = $q.defer();
    logoutFactory.logout()
    .then(function(error) {
      $log.log('Logout', error);
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  $rootScope.logoutOtherClients = function() {
    deferred = $q.defer();
    logoutFactory.logoutOtherClients()
    .then(function(error) {
      $log.log('Logout Other Clients', error);
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  // Create Update Delete

  // Retrieve

  $rootScope.subscribe('users');
  $rootScope.helpers({
    users: function() {
      return Meteor.users.find({});
    }
  });
  $rootScope.helpers({
    onlineUsers: function() {
      return Meteor.users.find({'status.online': true});
      // return Meteor.users.find({'status.online': true}, {fields: {email: {address: 1}}});
    }
  });

  $rootScope.$watch(function() {
    return $rootScope.users;
  }, function() {
    $log.log('Users', $rootScope.users);
  });

};


angular
.module('angularMeteor')
.factory('logoutFactory', logoutFactory);

logoutFactory.$inject = ['$q', '$timeout', '$log'];

function logoutFactory($q, $timeout, $log) {

  var factoryName = 'logoutFactory';
  var deferred;

  this.logout = function() {
    deferred = $q.defer();
    Meteor.logout(function(error) {
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  this.logoutOtherClients = function() {
    deferred = $q.defer();
    Meteor.logoutOtherClients(function(error) {
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  return this;

}

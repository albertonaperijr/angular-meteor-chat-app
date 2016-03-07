
angular
.module('angularMeteor')
.factory('loginFactory', loginFactory);

loginFactory.$inject = ['$q', '$timeout', '$log'];

function loginFactory($q, $timeout, $log) {

  var factoryName = 'loginFactory';
  var deferred;

  // this.loginUser = function(user, password) {
  //   deferred = $q.defer();
  //   Meteor.call('loginUser', user, password, function(error, response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.loginUser = function(user, password) {
    deferred = $q.defer();
    Meteor.loginWithPassword(user, password, function(error) {
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  return this;

}

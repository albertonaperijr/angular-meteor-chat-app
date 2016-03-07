
angular
.module('angularMeteor')
.factory('accountFactory', accountFactory);

accountFactory.$inject = ['$q', '$timeout', '$log'];

function accountFactory($q, $timeout, $log) {

  var factoryName = 'accountFactory';
  var deferred;

  //----------------------------------------------------------------------
  // Create update delete section
  //----------------------------------------------------------------------

  // this.createAccount = function(account) {
  //   deferred = $q.defer();
  //   Meteor.call('createAccount', account, function(error, response) {
  //     deferred.resolve(response);
  //   });
  //   return deferred.promise;
  // };

  this.createAccount = function(user) {
    deferred = $q.defer();
    Accounts.createUser(user, function(error) {
      deferred.resolve(error);
    });
    return deferred.promise;
  };

  //----------------------------------------------------------------------
  // Data retrieval section
  //----------------------------------------------------------------------

  return this;

}


angular
.module('angularMeteor')
.factory('emailFactory', emailFactory);

emailFactory.$inject = ['$q', '$timeout', '$log'];

function emailFactory($q, $timeout, $log) {

  var factoryName = 'emailFactory';
  var deferred;

  //----------------------------------------------------------------------
  // Create update delete section
  //----------------------------------------------------------------------

  this.sendEmail = function(content) {
    deferred = $q.defer();
    Meteor.call('sendEmail', content, function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  //----------------------------------------------------------------------
  // Data retrieval section
  //----------------------------------------------------------------------

  return this;

}

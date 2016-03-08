
angular
.module('angularMeteor')
.factory('messageFactory', messageFactory);

messageFactory.$inject = ['$q', '$timeout', '$log'];

function messageFactory($q, $timeout, $log) {

  var factoryName = 'messageFactory';
  var deferred;

  //----------------------------------------------------------------------
  // Create update delete section
  //----------------------------------------------------------------------

  this.createMessage = function(message) {
    deferred = $q.defer();
    Meteor.call('createMessage', message, function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.updateMessage = function(message) {
    deferred = $q.defer();
    Meteor.call('updateMessage', message, function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.removeMessage = function(message) {
    deferred = $q.defer();
    Meteor.call('removeMessage', message, function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  this.removeAllMessages = function() {
    deferred = $q.defer();
    Meteor.call('removeAllMessages', function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  //----------------------------------------------------------------------
  // Data retrieval section
  //----------------------------------------------------------------------

  this.getAllMessages = function() {
    deferred = $q.defer();
    Meteor.call('removeAllMessages', function(error, response) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };

  return this;

}

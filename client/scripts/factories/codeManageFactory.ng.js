
angular
.module('angularMeteor')
.factory('codeManagerFactory', codeManagerFactory);

codeManagerFactory.$inject = ['$log'];

function codeManagerFactory($log) {

  var factoryName = 'codeManagerFactory';
  var codeManagerFactory = {};

  //----------------------------------------------------------------------
  // Create update delete section
  //----------------------------------------------------------------------

  //----------------------------------------------------------------------
  // Data retrieval section
  //----------------------------------------------------------------------

  //----------------------------------------------------------------------
  // generic method section
  //----------------------------------------------------------------------

  codeManagerFactory.isSuccess = function (returnCode) {

    var returnString = returnCode.toString();
    var statusID = returnString.substring(0, 1);
    var isSucess = true;

    switch (statusID) {
      case '1':
      isSucess = true;
      $log.log(factoryName, 'SUCCESS: Code = ' + returnCode);
      break;
      case '2':
      isSucess = false;
      console.log(factoryName, 'ERROR: Code = ' + returnCode);
      break;
      case '3':
      isSucess = false;
      console.log(factoryName, 'GENERIC ERROR: Code = ' + returnCode);
      break;
      case '5':
      isSucess = false;
      console.log(factoryName, 'VIOLATES UNIQUE CONSTRAINT: Code = ' + returnCode);
      break;
      default:
      isSucess = false;
    }

    return isSucess;

  };

  return codeManagerFactory;

}

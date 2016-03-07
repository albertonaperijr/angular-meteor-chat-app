
angular
.module('angularMeteor')
.filter('trimWhitespace', trimWhitespace);

trimWhitespace.$injector = [];

function trimWhitespace() {

  return function(input) {
    return input.replace(/^\s*|\s*$/g, '');
  };

}

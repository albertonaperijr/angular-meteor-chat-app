

angular
.module('angularMeteor')
.directive('viewMain', viewMain);

viewMain.$inject = [];

function viewMain() {

    return {
        restrict: 'E',
        templateUrl: 'client/views/directives/views/view-main.directive.ng.html',
        replace: true
    };

}

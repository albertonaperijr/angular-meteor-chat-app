

angular
.module('angularMeteor')
.controller('MaterialCtrl', MaterialCtrl);

MaterialCtrl.$inject = ['$scope', '$log', 'emailFactory'];

function MaterialCtrl($scope, $log, emailFactory) {

    var controllerName = 'MaterialCtrl';
    $log.log(controllerName);

    DocHead.setTitle('Angular Material Design');

    $scope.sendEmail = function() {
        $scope.content = 'Test';
        $log.log(controllerName, 'sendEmail', $scope.content);
        emailFactory.sendEmail($scope.content)
        .then(function(Response) {
            $log.log(controllerName, 'Response', Response);
            // if (codeManagerFactory.isSuccess(Response.returnCode)) {
            //     // Success
            // } else {
            //     // error
            // }
        });
    };

};

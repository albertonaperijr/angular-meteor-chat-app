

angular
.module('angularMeteor')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$log', '$timeout', 'codeManagerFactory', 'messageFactory'];

function MainCtrl($scope, $log, $timeout, codeManagerFactory, messageFactory) {

    var controllerName = 'MainCtrl';
    $log.log(controllerName);

    DocHead.setTitle('Simple chat app by Alberto Naperi Jr.');

    /**
    * Angular Meteor Way - Latest Code
    **/

    $scope.subscribe('messages');
    $scope.helpers({
        messages() {
            return Messages.find().fetch().reverse();
        }
    });

    $scope.getUser = function(userId) {
        return Meteor.users.findOne(userId);
    };

    $scope.sendMessage = function() {
        if ($scope.message) {
            if (!$scope.message._id) {
                $log.log(controllerName, 'sendMessage create', $scope.message);
                messageFactory.createMessage($scope.message)
                .then(function(Response) {
                    $log.log(controllerName, 'Response', Response);
                    if (codeManagerFactory.isSuccess(Response.returnCode)) {
                        $scope.clear();
                    } else {
                        // error
                    }
                });
            } else {
                $log.log(controllerName, 'sendMessage update', $scope.message);
                messageFactory.updateMessage($scope.message)
                .then(function(Response) {
                    $log.log(controllerName, 'Response', Response);
                    if (codeManagerFactory.isSuccess(Response.returnCode)) {
                        $scope.clear();
                    } else {
                        // error
                    }
                });
            }
        } else {
            $log.log(controllerName, 'Null message');
        }
    };

    $scope.removeMessage = function(message) {
        $log.log(controllerName, 'removeMessage', message);
        if (message) {
            if (message._id) {
                messageFactory.removeMessage(message)
                .then(function(Response) {
                    $log.log(controllerName, 'Response', Response);
                    if (codeManagerFactory.isSuccess(Response.returnCode)) {
                        $log.info(controllerName, 'removeMessage success');
                    } else {
                        $log.error(controllerName, 'removeMessage error');
                    }
                });
            } else {

            }
        } else {

        }
    };

    $scope.removeAllMessages = function() {
        $log.log(controllerName, 'removeAllMessages');
        messageFactory.removeAllMessages()
        .then(function(Response) {
            $log.log(controllerName, 'Response', Response);
            if (codeManagerFactory.isSuccess(Response.returnCode)) {
                $log.info(controllerName, 'removeAllMessages success');
            } else {
                $log.error(controllerName, 'removeAllMessages error');
            }
        });
    };

    $scope.editMessage = function(message) {
        $log.log(controllerName, 'editMessage', message);
        $scope.helpers({
            message() {
                return Messages.findOne(message._id);
            }
        });
    };

    $scope.clear = function() {
        $timeout(function() {
            $scope.message = '';
            $log.log(controllerName, 'Messages', $scope.messages);
        });
    };

};

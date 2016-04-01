/**
*
* Message Methods
* Create Update Delete
*
**/

var future;

Meteor.methods({

    /**
    * Create Message
    **/
    createMessage: function(message) {
        MethodName = 'CreateMessage |';
        console.log(MethodName, message);

        future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!message) {
            console.error(MethodName, 'Null message |', Meteor.userId(), ' |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (message._id) {
            console.error(MethodName, 'Not null _id |',  Meteor.userId(), ' |',CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else {
            message.userId = Meteor.userId();
            Messages.insert(message, function(error, result) {
                if (error) {
                    console.error(MethodName, 'Error creating message |', Meteor.userId(), ' | error : ', error, '| ', CodeUtil.CREATE_MESSAGE_ERROR);
                    return future.return({
                        // error: error,
                        returnCode: CodeUtil.CREATE_MESSAGE_ERROR
                    });
                } else {
                    console.info(MethodName, 'Success creating message |', Meteor.userId(), ' |', CodeUtil.CREATE_MESSAGE_SUCCESS);
                    return future.return({
                        _id: result,
                        returnCode: CodeUtil.CREATE_MESSAGE_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    },

    /**
    * Update Message
    **/
    updateMessage: function(message) {
        MethodName = 'UpdateMessage |';
        console.log(MethodName, message);

        future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!message) {
            console.error(MethodName, 'Null message |', Meteor.userId(), ' |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!message._id || !message.message) {
            console.error(MethodName, 'Null _id or null message |', Meteor.userId(), ' |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (message.userId !== Meteor.userId()) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), ' |', CodeUtil.UNAUTHORIZED_ACCESS);
            return future.return({
                returnCode: CodeUtil.UNAUTHORIZED_ACCESS
            });
        } else {
            Messages.update(message._id, {$set: message}, function(error, result) {
                if (error) {
                    console.error(MethodName, 'Error updating message |', Meteor.userId(), ' | error : ', error, '| ', CodeUtil.UPDATE_MESSAGE_ERROR);
                    return future.return({
                        returnCode: CodeUtil.UPDATE_MESSAGE_ERROR
                    });
                } else {
                    console.info(MethodName, 'Success updating message |', Meteor.userId(), ' |', CodeUtil.UPDATE_MESSAGE_SUCCESS);
                    return future.return({
                        _id: result,
                        returnCode: CodeUtil.UPDATE_MESSAGE_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    },

    /**
    * Remove Message
    **/
    removeMessage: function(message) {
        MethodName = 'RemoveMessage |';
        console.log(MethodName, message);

        future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!message) {
            console.error(MethodName, 'Null message |', Meteor.userId(), ' |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!message._id) {
            console.error(MethodName, 'Null _id |', Meteor.userId(), ' |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (message.userId !== Meteor.userId()) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), ' |', CodeUtil.UNAUTHORIZED_ACCESS);
            return future.return({
                returnCode: CodeUtil.UNAUTHORIZED_ACCESS
            });
        } else {
            Messages.remove({_id: message._id}, function(error) {
                if (error) {
                    console.error(MethodName, 'Error deleting messagee |',  Meteor.userId(), ' | error :', error, '|', CodeUtil.DELETE_MESSAGE_ERROR);
                    return future.return({
                        returnCode: CodeUtil.DELETE_MESSAGE_ERROR
                    });
                } else {
                    console.info(MethodName, 'Success deleting message |', Meteor.userId(), ' |', CodeUtil.DELETE_MESSAGE_SUCCESS);
                    return future.return({
                        returnCode: CodeUtil.DELETE_MESSAGE_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    },

    /**
    * Remove All Messages
    **/
    removeAllMessages: function() {
        MethodName = 'RemoveAllMessages |';
        console.log(MethodName, Meteor.user());

        future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!Meteor.user().roles) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), ' |', CodeUtil.UNAUTHORIZED_ACCESS);
            return future.return({
                returnCode: CodeUtil.UNAUTHORIZED_ACCESS
            });
        } else if (Meteor.user().roles.indexOf('admin') < 0) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), ' |', CodeUtil.UNAUTHORIZED_ACCESS);
            return future.return({
                returnCode: CodeUtil.UNAUTHORIZED_ACCESS
            });
        } else {
            Messages.remove({}, function(error) {
                if (error) {
                    console.error(MethodName, 'Error deleting all messages |', Meteor.userId(), ' |', CodeUtil.DELETE_MESSAGE_ERROR);
                    return future.return({
                        returnCode: CodeUtil.DELETE_MESSAGE_ERROR
                    });
                } else {
                    console.info(MethodName, 'Success deleting all messages |', Meteor.userId(), ' |', CodeUtil.DELETE_MESSAGE_SUCCESS);
                    return future.return({
                        returnCode: CodeUtil.DELETE_MESSAGE_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    }
});

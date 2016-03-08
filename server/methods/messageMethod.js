/**
*
* Message Methods
* Create Update Delete
*
**/

var Future = Npm.require('fibers/future'); // Synchronous Method
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
      console.error(MethodName, 'Null message |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (message._id) {
      console.error(MethodName, 'Not null _id |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else {
      message.owner = Meteor.userId();
      Messages.insert(message, function(error, result) {
        if (error) {
          console.error(MethodName, 'Error creating message |', CodeUtil.CREATE_MESSAGE_ERROR);
          return future.return({
            returnCode: CodeUtil.CREATE_MESSAGE_ERROR
          });
        } else {
          console.info(MethodName, 'Success creating message |', CodeUtil.CREATE_MESSAGE_SUCCESS);
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
      console.error(MethodName, 'Null message |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (!message._id) {
      console.error(MethodName, 'Null _id |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (message.owner !== Meteor.userId()) {
      console.error(MethodName, 'Unauthorized access |', CodeUtil.UNAUTHORIZED_ACCESS);
      return future.return({
        returnCode: CodeUtil.UNAUTHORIZED_ACCESS
      });
    } else {
      Messages.update(message._id, message, function(error, result) {
        if (error) {
          console.error(MethodName, 'Error updating message |', CodeUtil.UPDATE_MESSAGE_ERROR);
          return future.return({
            returnCode: CodeUtil.UPDATE_MESSAGE_ERROR
          });
        } else {
          console.info(MethodName, 'Success updating message |', CodeUtil.UPDATE_MESSAGE_SUCCESS);
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
      console.error(MethodName, 'Null message |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (!message._id) {
      console.error(MethodName, 'Null _id |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (message.owner !== Meteor.userId()) {
      console.error(MethodName, 'Unauthorized access |', CodeUtil.UNAUTHORIZED_ACCESS);
      return future.return({
        returnCode: CodeUtil.UNAUTHORIZED_ACCESS
      });
    } else {
      Messages.remove({_id: message._id}, function(error) {
        if (error) {
          console.error(MethodName, 'Error deleting messagee |', message._id, '|', CodeUtil.DELETE_MESSAGE_ERROR);
          return future.return({
            returnCode: CodeUtil.DELETE_MESSAGE_ERROR
          });
        } else {
          console.info(MethodName, 'Success deleting message |', message._id, '|', CodeUtil.DELETE_MESSAGE_SUCCESS);
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

    future = new Future();

    Messages.remove({}, function(error) {
      if (error) {
        console.error(MethodName, 'Error deleting all messages |', CodeUtil.DELETE_MESSAGE_ERROR);
        return future.return({
          returnCode: CodeUtil.DELETE_MESSAGE_ERROR
        });
      } else {
        console.info(MethodName, 'Success deleting all messages |', CodeUtil.DELETE_MESSAGE_SUCCESS);
        return future.return({
          returnCode: CodeUtil.DELETE_MESSAGE_SUCCESS
        });
      }
    });

    return future.wait();
  }
});

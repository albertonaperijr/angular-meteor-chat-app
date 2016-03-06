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

    if (!message) {
      // throw new Meteor.Error('Null message');
      console.error(MethodName, 'Null message |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else {
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

    if (!message) {
      console.error(MethodName, 'Null message |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
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
  removeMessage: function(messageId) {
    MethodName = 'RemoveMessage |';
    console.log(MethodName, messageId);

    future = new Future();

    if (!messageId) {
      console.error(MethodName, 'Null messageId |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else {
      Messages.remove({_id: messageId}, function(error) {
        if (error) {
          console.error(MethodName, 'Error deleting messagee |', messageId, '|', CodeUtil.DELETE_MESSAGE_ERROR);
          return future.return({
            returnCode: CodeUtil.DELETE_MESSAGE_ERROR
          });
        } else {
          console.info(MethodName, 'Success deleting message |', messageId, '|', CodeUtil.DELETE_MESSAGE_SUCCESS);
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

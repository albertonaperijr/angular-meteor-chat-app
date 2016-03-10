/**
*
* Account Methods
*
*
**/

var future;

Meteor.methods({

  /**
  * Create Account
  **/
  createAccount: function(user) {
    MethodName = 'Create Account |';
    console.log(MethodName, user);

    future = new Future();

    if (!user) {
      console.error(MethodName, 'Null user |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else if (!user.username || !user.password || !user.email) {
      console.error(MethodName, 'Null username or null password or null email |', CodeUtil.INVALID_PARAMETER);
      return future.return({
        returnCode: CodeUtil.INVALID_PARAMETER
      });
    } else {
      Accounts.createUser(user, function(error) {
        if (error) {
          console.error(MethodName, 'Error creating account |', error, CodeUtil.CREATE_ACCOUNT_ERROR);
          return future.return({
            returnCode: CodeUtil.CREATE_ACCOUNT_ERROR
          });
        } else {
          console.info(MethodName, 'Success creating account |', CodeUtil.CREATE_ACCOUNT_SUCCESS);
          return future.return({
            returnCode: CodeUtil.CREATE_ACCOUNT_SUCCESS
          });
        }
      });
    }

    return future.wait();
  }
});

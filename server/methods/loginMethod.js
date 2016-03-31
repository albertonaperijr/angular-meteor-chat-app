/**
*
* Login Methods
*
*
**/

var future;

Meteor.methods({

    /**
    * Login
    **/
    loginUser: function(user, password) {
        MethodName = 'Login |';
        console.log(MethodName, 'user :', user, '| password :', password);

        future = new Future();

        if (!user || !password) {
            console.error(MethodName, 'Null user or null password |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else if (!user.email) {
            console.error(MethodName, 'Null email |', CodeUtil.INVALID_PARAMETER);
            return future.return({
                returnCode: CodeUtil.INVALID_PARAMETER
            });
        } else {
            Meteor.loginWithPassword(user, password, function(error) {
                if (error) {
                    console.error(MethodName, 'Error logging user |', error, CodeUtil.LOGIN_ERROR);
                    return future.return({
                        returnCode: CodeUtil.LOGIN_ERROR
                    });
                } else {
                    console.info(MethodName, 'Success logging in |', CodeUtil.LOGIN_SUCCESS);
                    return future.return({
                        // _id: result,
                        returnCode: CodeUtil.LOGIN_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    }
});

/**
*
* Email Methods
*
*
**/

var future;

Meteor.methods({

  /**
  * Send eMail
  **/
  sendEmail: function(content) {
    MethodName = 'SendMail |';
    console.log(MethodName, content);

    // future = new Future();

    if (!content) {
      console.error(MethodName, 'Null content |', CodeUtil.INVALID_PARAMETER);
      // return future.return({
      //   returnCode: CodeUtil.INVALID_PARAMETER
      // });
    } else {
      Email.send({
        from: "dumyiih@gmail.com",
        to: "albertonaperijr@gmail.com",
        subject: "Meteor Can Send Emails via Gmail",
        text: "Its pretty easy to send emails via gmail."
      });
    }

    // return future.wait();
  },
});

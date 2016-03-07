Meteor.startup(function () {

  // 2. Format the email
  //-- Set the from address
  Accounts.emailTemplates.from = 'Alberto Naperi Jr. ';

  //-- Application name
  Accounts.emailTemplates.siteName = 'Simple Chat App';

  //-- Subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address for Simple Chat App';
  };

  //-- Email text
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
  };

  // 3.  Send email when account is created
  // Accounts.config({
  //   sendVerificationEmail: true
  // });
});

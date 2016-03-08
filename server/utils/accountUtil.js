

Accounts.validateNewUser(function(user) {

  console.log('validateNewUser user :', user);

  if (user.services.facebook) {
    user.emails = [{
      address: user.services.facebook.email,
      verified: true
    }];
    return true;
  } else if (user.services.twitter) {
    user.emails = [{
      address: user.services.twitter.email,
      verified: true
    }];
    return true;
  } else if (user.services.google) {
    user.emails = [{
      address: user.services.google.email,
      verified: true
    }];
    return true;
  } else if (user.services.password) {
    return true;
  } else {
    throw new Meteor.Error(403, 'Error : Invalid Parameter');
  }

});

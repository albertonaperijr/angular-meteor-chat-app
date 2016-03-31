

Accounts.validateNewUser(function(user) {

    console.log('ValidateNewUser :', user);
    // user.roles = [
    //   'admin'
    // ];

    if (user.services.facebook) {
        if (user.services.facebook.email) {
            user.emails = [{
                address: user.services.facebook.email,
                verified: true
            }];
        }
        return true;
    } else if (user.services.twitter) {
        if (user.services.twitter.email) {
            user.emails = [{
                address: user.services.twitter.email,
                verified: true
            }];
        }
        return true;
    } else if (user.services.google) {
        if (user.services.google.email) {
            user.emails = [{
                address: user.services.google.email,
                verified: true
            }];
        }
        return true;
    } else if (user.services.password) {
        // new SimpleSchema({
        //     _id: { type: String },
        //     emails: { type: Array },
        //     'emails.$': { type: Object },
        //     'emails.$.address': { type: String },
        //     'emails.$.verified': { type: Boolean },
        //     createdAt: { type: Date },
        //     services: { type: Object, blackbox: true }
        // }).validate(user);
        return true;
    } else {
        throw new Meteor.Error(403, 'Error : Invalid Parameter');
    }

});

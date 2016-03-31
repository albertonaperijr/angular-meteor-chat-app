
/**
* Users Publish
**/

Meteor.publish('users', function() {
    return Meteor.users.find({});
});

// Meteor.publish('onlineUsers', function() {
//   return Meteor.users.find({'status.online': true});
// });

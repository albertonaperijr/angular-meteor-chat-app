



Meteor.publish('users', function() {
  return Meteor.users.find({});
});

// Meteor.publish('onlineUsers', function() {
//   return Meteor.users.find({'status.online': true});
// });

Meteor.publish('messages', function() {
  return Messages.find({});
});

Meteor.publish('message', function(messageId) {
  console.log('messageId', messageId);
  return Messages.findOne(messageId);
});

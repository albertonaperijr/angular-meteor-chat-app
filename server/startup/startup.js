

Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    var messages = [
      {
        'name': 'Dubstep-Free Zone',
        'message': 'Fast just got faster with Nexus S.'
      },
      {
        'name': 'All dubstep all the time',
        'message': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'message': 'Leisure suit required. And only fiercest manners.'
      }
    ];

    for (var i = 0; i < messages.length; i++) {
      Messages.insert(messages[i]);
    }
  }
});

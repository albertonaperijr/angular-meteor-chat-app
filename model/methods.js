
Messages = new Mongo.Collection('messages');


MessagesSchemas = {};

MessagesSchemas.Messages = new SimpleSchema({
  userId: {
    type: String,
    label: 'UserId'
  },
  message: {
    type: String,
    label: 'Message'
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Messages.attachSchema(MessagesSchemas.Messages);


UsersSchemas = {};

UsersSchemas.UserCountry = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  code: {
    type: String,
    regEx: /^[A-Z]{2}$/,
    optional: true
  }
});

UsersSchemas.UserProfile = new SimpleSchema({
  name: {
    type: String,
    optional: true,
    label: 'Name'
  },
  firstName: {
    type: String,
    optional: true,
    label: 'First Name'
  },
  lastName: {
    type: String,
    optional: true,
    label: 'Last Name'
  },
  birthdate: {
    type: Date,
    optional: true,
    label: 'Birth Date'
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female', 'male', 'female'],
    optional: true,
    label: 'Gender'
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    label: 'Website'
  },
  bio: {
    type: String,
    optional: true,
    label: 'Birth Date'
  },
  country: {
    type: UsersSchemas.UserCountry,
    optional: true,
    label: 'Country'
  }
});

UsersSchemas.User = new SimpleSchema({
  username: {
    type: String,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true,
    label: 'Username'
  },
  emails: {
    type: Array,
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true,
    label: 'Emails'
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Address'
  },
  'emails.$.verified': {
    type: Boolean,
    label: 'Verified'
  },
  // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
  // registered_emails: {
  //   type: [Object],
  //   optional: true,
  //   blackbox: true
  // },
  createdAt: {
    type: Date
  },
  profile: {
    type: UsersSchemas.UserProfile,
    optional: true,
    label: 'Profile'
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  status: {
    type: Object,
    optional: true,
    blackbox: true,
    label: 'Status'
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Option 1: Object type
  // If you specify that type as Object, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Example:
  // Roles.addUsersToRoles(userId, ['admin'], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  // roles: {
  //   type: Object,
  //   optional: true,
  //   blackbox: true
  // },
  // Option 2: [String] type
  // If you are sure you will never need to use role groups, then
  // you can specify [String] as the type
  roles: {
    type: [String],
    optional: true,
    label: 'Roles'
  }
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  // heartbeat: {
  //   type: Date,
  //   optional: true
  // }
});

// Meteor.users.attachSchema(UsersSchemas.User);

ServiceConfiguration.configurations
.upsert({
  service: 'google'
}, {
  $set: {
    clientId: '257744576753-jpbrmp5tg7npt29k5sheb9tofgna9bpr.apps.googleusercontent.com',
    loginStyle: 'popup',
    secret: 'aaFs58dBvLXWzwmGTga9mhuX'
  }
});

ServiceConfiguration.configurations
.upsert({
  service: 'facebook'
}, {
  $set: {
    appId: '1647716515481567',
    loginStyle: 'popup',
    secret: '72f30fab8fad29c0b7d06e8d6664df03'
  }
});

ServiceConfiguration.configurations
.upsert({
  service: 'twitter'
}, {
  $set: {
    consumerKey: '4cpqi8Gg1YbGV2M822biqTSyR',
    loginStyle: 'popup',
    secret: 'JTVGWGEjbomEr1hIZ1yVz0fpixP89ZdSEQkVvKVgoHsXXSdS8L'
  }
});

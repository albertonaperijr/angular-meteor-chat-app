

ServiceConfiguration.configurations.upsert(
  { service: "weibo" },
  {
    $set: {
      clientId: "1292962797",
      loginStyle: "popup",
      secret: "75a730b58f5691de5522789070c319bc"
    }
  }
);

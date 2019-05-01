const MoltinGateway = require("@moltin/sdk").gateway;
const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID
});

module.exports = {
  target: "serverless",
  env: {
    MOLTIN_CLIENT_ID: process.env.MOLTIN_CLIENT_ID
  },
  webpack: config => {
    // FS
    config.node = {
      fs: "empty"
    };
    return config;
  }
};

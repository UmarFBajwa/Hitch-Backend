var braintree = require('braintree');

// require('dotenv').load();
// environment = process.env.BT_ENVIRONMENT.charAt(0).toUpperCase() + process.env.BT_ENVIRONMENT.slice(1);

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "drpzkrnw2nf3gc9t",
  publicKey: "bdm5fkp8jng4986y",
  privateKey: "fe40e0f9f84fc8984075390de21f82de"
});

module.exports = gateway;

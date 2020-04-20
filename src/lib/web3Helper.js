const Web3 = require('web3');


let web3;

/**
 * Generate a new Web3 object if it was not created already.
 * @return {Web3} A web3 instance.
 */
function getInstance() {
  if (!web3) {
    web3 = new Web3(new Web3.providers.HttpProvider(process.env.VUE_APP_GATH_URL));
  }

  return web3;
}


module.exports = {
  getInstance,
};
const path = require("path");
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
        )
      },
      gas: 6000000,
      gasPrice: 25000000000,
      confirmations: 2,
      network_id: 1,
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
        )
      },
      gas: 6000000,
      gasPrice: 25000000000,
      network_id: "*"
    }
  }
};

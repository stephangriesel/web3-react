require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerlieth: {
      url: 'http://urlgoesher',
      accounts: ['privatekeygoeshere'],
    }
  }
}
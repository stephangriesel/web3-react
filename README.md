# Web3 Project

1. Clone repo
2. `npm install`

## Smart Contract

1. `npx hardhat run scripts/deploy.js --network goerlieth`
2. Copy transaction id to: `client/src/utils/constants.js`
3. Copy ABI json `smart_contract/artifacts/contracts/Transactions.sol/Transactions.json` to `client/src/utils/Transactions.json`

## Client

1. `npm run dev`
const BlockChain = require("./classes/blockchain")

// initial of blockchain
const YaCoin = new BlockChain()

// manually add new chain
YaCoin.addChain(
    'mfdsix',
    'donation project',
    10000
)
// randomly add new chains
YaCoin.addRandom(100)

console.log(YaCoin);
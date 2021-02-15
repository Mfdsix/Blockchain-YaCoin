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

// check all chains validity
console.log("Check chains validity : " + (YaCoin.checkValidity() ? "valid" : "not valid"))

// tryna simulate when hacker change the value
YaCoin.chains[1].data.from = "changed by hacker";
console.log("block indexed 1 is changed");

// recheck validity of changed chains
console.log("Check chains validity : " + (YaCoin.checkValidity() ? "valid" : "not valid"))
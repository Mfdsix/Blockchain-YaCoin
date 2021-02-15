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
console.log("✔ Check chains validity : " + (YaCoin.checkValidity() ? "valid" : "not valid"))

// tryna simulate when hacker change the value
const chainToHack = YaCoin.chains[1]
chainToHack.data.from = "changed by hacker";
console.log("😐 block indexed 1 is changed");

// recheck validity of changed chains
console.log("✔ Check chains validity : " + (YaCoin.checkValidity() ? "valid" : "not valid"))

// tryna be more clever hacker
chainToHack.hash = chainToHack.generateHash()
console.log("😐 hash of block indexed 1 is recreated");

// recheck validity of changed chains
console.log("✔ Check chains validity : " + (YaCoin.checkValidity() ? "valid" : "not valid"))
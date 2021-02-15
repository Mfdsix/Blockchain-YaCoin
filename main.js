const BlockChain = require("./classes/blockchain")

const YaCoin = new BlockChain()
YaCoin.addChain(
    'mfdsix',
    'donation project',
    10000
)
YaCoin.addRandom(100)
console.log(JSON.stringify(YaCoin, null, 4))
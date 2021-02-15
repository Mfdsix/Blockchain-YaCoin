const Wallet = require("./classes/wallet")
const BlockChain = require("./classes/blockchain")

const YaWallet = new Wallet()
const YaCoin = new BlockChain(5)
YaCoin.createBlock()

async function startMine() {
    let mined = await YaCoin.mine(YaWallet)
    if(mined){
        startMine()
    }
}

startMine()
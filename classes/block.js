const SHA256 = require("crypto-js/sha256");
const Wallet = require("./wallet");

class Block{
    constructor(previousHash = null){
        this.timestamp = new Date()
        this.transactions = []
        this.previousHash = previousHash
        this.hash = this.generateHash();
        this.nonce = 0
    }

    generateHash(){
        return SHA256(this.id + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce ).toString()
    }

    mine(difficulty, wallet, amount){
        console.log("Mining....")
        while(this.hash.substr(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++
            this.hash = this.generateHash()
        }

        this.transactions.push({
            from: "YaCoin Wallet",
            to: wallet.address,
            nominal: amount
        })
        console.log("block mined: " + this.hash)
        console.log("you get " + amount + " coins")
        wallet.receive(amount)
        console.log("current balance: " + wallet.amount)
        this.hash = this.generateHash()

        return true
    }
}

module.exports = Block
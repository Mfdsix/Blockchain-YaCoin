const SHA256 = require("crypto-js/sha256")

class Block{
    constructor(timestamp, data, previousHash = null){
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.generateHash();
        this.nonce = 0
    }

    generateHash(){
        return SHA256(this.id + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce ).toString()
    }

    mine(difficulty){
        console.log("Mining....")
        while(this.hash.substr(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++
            this.hash = this.generateHash()
        }

        console.log("Block mined : " + this.hash)
    }
}

module.exports = Block
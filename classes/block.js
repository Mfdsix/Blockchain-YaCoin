const SHA256 = require("crypto-js/sha256")

class Block{
    constructor(timestamp, data, previousHash = null){
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.generateHash();
    }

    generateHash(){
        return SHA256(this.id + this.previousHash + this.timestamp + JSON.stringify(this.data) ).toString()
    }
}

module.exports = Block
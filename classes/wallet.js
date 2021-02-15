const SHA256 = require("crypto-js/sha256")

class Wallet{
    constructor(){
        this.address = null
        this.amount = 0

        this.generate()
    }

    generate(){
        console.log("Generating new wallet...")
        let wallet = SHA256("new-wallet")
        console.log(Array(100).join("-"))
        console.log("Your wallet is: " + wallet)
        console.log(Array(100).join("-"))

        this.address = wallet
    }

    receive(amount){
        this.amount += amount
    }

    transfer(amount){
        this.amount -= amount
    }

    balance(){
        return this.amount
    }
}

module.exports = Wallet
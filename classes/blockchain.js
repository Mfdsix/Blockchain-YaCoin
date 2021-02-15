const Block = require("./block")

class BlockChain{
    constructor(){
        this.chains = [];
        this.initialChain();
    }

    initialChain(){
        this.chains.push(
            new Block(
                new Date(),
                {
                    from: 'mfdsix',
                    to: 'donation project',
                    nominal: 5000
                },
            )
        )

        console.log("Chain initialized")
    }

    latestChain(){
        return this.chains[this.chains.length - 1]
    }

    addChain(from, to, nominal){
        let latest = this.latestChain();

        this.chains.push(
            new Block(
                new Date(),
                {
                    from: from,
                    to: to,
                    nominal: nominal
                },
                latest.hash
            )
        )

        console.log("Added successfully")
    }

    addRandom(length = 5){
        for(let i = 1; i <= length; i++){
            this.addChain();
        }
    }
}

module.exports = BlockChain
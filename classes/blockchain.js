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

        console.log("chain initialized")
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
}

module.exports = BlockChain
const Block = require("./block")
const Faker = require("faker")

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
    }

    addRandom(length = 5){
        for(let i = 1; i <= length; i++){
            this.addChain(
                Faker.name.findName(),
                Faker.company.companyName(),
                Faker.random.number(123456789)
            );
        }
    }

    checkValidity(){
        for(let i = 1; i < this.chains.length; i++){
            const current = this.chains[i]
            const previous = this.chains[i-1]

            if(current.hash !== current.generateHash()){
                return false
            }
            if(current.previousHash !== previous.hash){
                return false
            }

        }
		return true
    }
}

module.exports = BlockChain
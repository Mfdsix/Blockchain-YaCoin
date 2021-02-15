const Block = require("./block")
const Faker = require("faker")

class BlockChain{
    constructor(difficulty = 2){
        this.chains = [];
        this.initialChain();
		this.difficulty = difficulty
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
        let latest = this.latestChain()
		let newBlock = new Block(
			new Date(),
			{
				from: from,
				to: to,
				nominal: nominal
			},
			latest.hash
		)
		newBlock.mine(this.difficulty)

        this.chains.push(newBlock)
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
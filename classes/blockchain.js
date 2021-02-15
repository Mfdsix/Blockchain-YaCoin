const Block = require("./block")
const Faker = require("faker")

class BlockChain{
    constructor(difficulty = 2, reward = 100){
        this.chains = []
		this.difficulty = difficulty
		this.reward = reward
		this.initBlock()
    }

	initBlock(){
		this.chains.push(new Block())
	}

    latestChain(){
        return this.chains[this.chains.length - 1]
    }

	createBlock(){
		let lastBlock = this.latestChain()
		let block = new Block(lastBlock.hash)

		this.chains.push(block)
	}

	mine(wallet){
		let lastBlock = this.latestChain()
		let mined = lastBlock.mine(this.difficulty, wallet, this.reward)
		return mined
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
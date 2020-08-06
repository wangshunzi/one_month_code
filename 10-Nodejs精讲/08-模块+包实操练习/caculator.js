class Caculator {
    constructor(initValue) {
        this.result = initValue
    }

    sum(num) {
        this.result += num;
        return this;
    }

    jian(num) {
        this.result -= num;
        return this;
    }

    logResult() {
        console.log(this.result)
    }
    getResult() {
        return this.result;
    }

}


module.exports = {
    Caculator
}

// let c = new Caculator(0);
// c.sum(10).sum(20).sum(30).jian(5).logResult()

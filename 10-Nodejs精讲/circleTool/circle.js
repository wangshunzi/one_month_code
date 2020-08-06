
let caculator = require("./caculator")

function zc(r) {
    let temp = caculator.cheng(2, Math.PI)
    let result = caculator.cheng(temp, r)
    return result;
}

function mj(r) {
    return Math.PI * r * r;
}

module.exports = {
    zc,
    mj
}
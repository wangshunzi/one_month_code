// node 帮你提供了一个模块 -> 可以实现文件读写
// 引入模块, 调用方法 fs filesystem

const fs = require("fs")

// 1. 读取data.txt
let content = fs.readFileSync("./data.txt").toString()
// console.log(content)
let ageArray = content.split("\r\n");

let result = [];
for (let i = 0, len=ageArray.length; i < len; i++) {
    let age = +ageArray[i]
    if (age >= 18) {
        result.push("成年")
    } else {
        result.push("未成年")
    }
}

// console.log(["a", "b"].join("\r\n"));

// console.log(result)
//
fs.writeFileSync("./result.txt",result.join("\r\n"))

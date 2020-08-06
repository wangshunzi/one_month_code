const fs = require("fs");

// 要等待, 文件写入完毕之后, 才会继续执行后续代码
// fs.writeFileSync("./xxx.txt", "123")

fs.appendFileSync("./xxx.txt", "abc")

// let content = fs.readFileSync("./xxx.txt")
// console.log(content)



// 不会等待写入完毕, 而是, 直接往后去执行
// fs.writeFile("./xxx.txt", "abc", ()=>{
//     let content = fs.readFileSync("./xxx.txt")
//     console.log(content)
//
// })




// sync
// async


// fs.writeFileSync("./abc.txt", "abc")
// fs.writeFileSync("./abc.txt", "12345")

// console.log(1)
// fs.writeFile("./abc.xx", "123123", ()=>{
//     console.log("写入完毕")
// })
// console.log(2)

// 1. 读取文件内容

// console.log("1")
// fs.readFile("./data.json", ((err, data) => {
//     console.log("3")
//     if (err) {
//         console.log("读取文件内容错误", err)
//     } else {
//         console.log(data.toString())
//     }
// }))
// console.log("2")

// let content =  fs.readFileSync("./data.json")
// let str = content.toString();

// let arr= JSON.parse(str)
// console.log(typeof arr, arr[0])


// function getData(cb) {
//
//     // cb = function (val) {
//     //     console.log(val)
//     // }
//
//     // 2s 之后, 向外界传递一个结果: 123
//     setTimeout(function () {
//         // 123
//         cb(123)
//     }, 2000)
//
// }
//
//
//
// getData(function (val) {
//     console.log(val)
// })

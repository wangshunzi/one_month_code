

// 根本就不是浏览器 window对象身上的console
/// node 帮你提供的一个全局对象
// console.log("xxxx")

// console.warn("xxxx")


// 性能高低 - > 耗时多久?

// console.time("循环耗时计算: ") // 自动的开始计时
// for (let i = 0; i < 1000; i++) {
//     console.log("数值", i)
// }
// console.timeEnd("循环耗时计算: ") // 结束计时, 并且, 把中间的耗费时间输出出来


console.log(__dirname)
console.log(__filename)

let timer = setInterval(()=>{
    console.log("xxx")
}, 1000)


setTimeout(function () {
    clearInterval(timer)
}, 5000)




// module.exports
//
// exports
// require


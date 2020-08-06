// const axios = require("axios")
// const fs = require("fs")

// console.log(axios)

// axios 发送一个网络请求, 获取百度首页的源代码
// axios.defaults.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"
// axios.get("https://www.baidu.com/").then(result=>{
//     fs.writeFileSync("./baidu.html", result.data)
//
// })


// -----------------------生成二维码功能
const qr = require("qr-image");
const fs = require("fs");


let content = qr.imageSync("http://www.baidu.com", {type: "png"})
// console.log(content)
fs.writeFileSync("./erweima.png", content)

// ---------------------------图片处理








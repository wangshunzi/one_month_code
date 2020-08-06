const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs")
const path = require("path")

let app = express();


app.use(express.static("../public"))

// 在写路由处理之前, 先执行如下代码
app.use(bodyParser.json());
// 能够处理json格式的参数
app.use(bodyParser.urlencoded({ extended: true }));
// 能够处理普通的&拼接参数

app.get("/file", function (request, response) {
    // response.sendFile(path.resolve(__dirname, "../3.jpeg"))

    // let image_data = fs.readFileSync("../3.jpeg");
    // mimetype

    // console.log(image_data)
    // response.set("Content-Type", "image/jpeg")
    // response.send(image_data)

})

app.get("/woyaonawangye", function (request, response) {

    // 1. 读取文件内容 -> string
    let content = fs.readFileSync("../index.html").toString()
    // 2. 字符串 -> 客户端
    response.set("Content-Type", "text/plain")
    response.send(content)
})


app.get("/get_obj", function (request, response) {

    let obj = [{
        name: "sz",
        age: 18
    },{
        name: "sz2",
        age: 19
    }]

    // 1. 把js对象进行序列化操作 -> 字符串
    // let str = JSON.stringify(obj)
    // 2. 把字符串响应给客户端
    // response.send(obj)

    response.json(obj)
})


app.listen(3000, function () {
    console.log("服务器启动成功", "localhost:3000/")
})
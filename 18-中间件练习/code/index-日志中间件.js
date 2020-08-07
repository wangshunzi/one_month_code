const express = require("express");
const fs = require("fs");


let app = express();


// 日志记录
app.use(function (request, response, next) {
    // 日志的记录
    let path = request.path;
    let method = request.method;
    let ua = request.headers["user-agent"]
    let time = new Date();
    let item = `
     **********************************
        请求时间: ${time}
        请求路径: ${path}
        请求方法: ${method}
        请求的客户端: ${ua}
     **********************************
    `
    fs.appendFile("./rizhi.txt", item, ()=>{})
    next()
})



app.get("/", function (request, response, next) {
    // console.log("/ get")


    // console.log(ua)
    // if (ua.indexOf("Mozilla") === -1) {
    //     response.send("你是爬虫, 我补给你数据")
    // } else {
    //     response.send("<h1>数据</h1>")
    // }
    //
    response.send("ok")

})

app.get("/abc", function (request, response, next) {
    console.log("/abc get")
    response.send("/abc ok")
})

app.post("/abc", function (request, response, next) {
    console.log("/abc post")
    response.send("/abc post - ok")
})




app.listen(3000, function () {
    console.log("启动成功")
})
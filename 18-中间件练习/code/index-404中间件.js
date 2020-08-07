const express = require("express");
// const fs = require("fs");
const path = require("path")


let app = express();


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



// 路由一个都没有匹配上 404
app.use(function (request, response) {
    let ab_path = path.resolve(__dirname, "./404.html")
    response.sendFile(ab_path)
})


app.listen(3000, function () {
    console.log("启动成功")
})
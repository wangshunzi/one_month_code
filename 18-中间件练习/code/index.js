const express = require("express");
// const fs = require("fs");
const path = require("path")


let app = express();


app.get("/", function (request, response, next) {
    // console.log("/ get")
    let arr = request.query.arr
    // console.log(arr[1])
    arr()
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


// 在中间件的最后位置(写四个参数)
app.use(function (err, request, response, next) {
    console.log(err)
    response.send("500内部错误")
})


app.listen(3000, function () {
    console.log("启动成功")
})
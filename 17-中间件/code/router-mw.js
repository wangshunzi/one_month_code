const express = require("express");


let app = express()

app.use(function (request, response, next) {
    console.log("abc-中间件1")
    next()
})

app.get("/abc", function (request, response, next) {

    console.log("/abc  get ")
    response.send("ok")
    next()
})


app.use(function (request, response, next) {
    console.log("最后一个中间件")
})


// app.get("/abc/d", function (request, response, next) {
//     console.log("/abd/d get")
//     response.send("xxx")
// })



app.listen(3000, function () {
    console.log("启动成功")
})


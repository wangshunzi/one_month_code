const express = require("express");

// 1. 创建一个服务器对象
let app = express();

// 这是第一个中间件
app.use(function (request, response, next) {
    console.log("我是第一个中间件", request.query)
    request.query.pwd = "abc";
    next()
})

// 这是第二个中间件
app.use(function (request, response, next) {
    console.log("我是第二个中间件", request.query)
    //
    // 设置响应头 (content-type)
    // 发送数据
    response.send("ok")
    next()
})


// 这是第三个中间件
app.use(function (request, response, next) {
    console.log("我是第3个中间件", request.query)

    // 设置响应头 (content-type)
    // 发送数据
    response.send("xxx")
})

// n. 启动服务器(监听的端口号)
app.listen(3000, function () {
    console.log("服务器启动成功")
})
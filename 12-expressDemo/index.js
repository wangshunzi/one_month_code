const express = require("express")

// 1. 先创建一个服务器对象(app)
let app = express()

let data = [
    {account: "abc", pwd: "123"},

]

// 模拟登录验证的接口逻辑
// localhost:3000/login  get  account, pwd
app.get("/login", (req, resp, next)=>{
    const {account, pwd} = req.query;
    if (account === "itlike" && pwd === "123") {
        resp.send({
            code: 0,
            msg: "登录成功"
        })
    } else {
        resp.send({
            code: -1,
            msg: "登录失败"
        })
    }
})


app.get("/caculate", (req, resp, next)=>{
    console.log("接收到请求", req.query)
    let {num1, num2} = req.query
    num1 = +num1;
    num2 = +num2;
    let result = num1 + num2;
    resp.send({result})
})

// 主机 + /abc
app.get("/abc", (req, resp, next)=>{

    resp.send("你访问的路径是abc这是我给你响应的数据")
})

app.get("/aaa", (req, resp, next)=>{

    resp.send("你访问的路径是aaa这是我给你响应的数据" + 123)
})



// app.get("/", (req, resp, next) =>{
//     // console.log("接收到了客户端发送的请求", req.headers)
//
//     let obj = {
//         name: "sz",
//         age: 18
//     }
//     resp.send(obj)
//
// })


// 最后一步:
// 启动服务器, 监听一个特定的端口号
app.listen(3000, function () {
    console.log("服务器启动成功")
})
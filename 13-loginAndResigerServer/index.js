const express = require("express")
// 1. 创建一个服务器对象
let app = express()

let accounts = [
]

// 接口文档
// 地址, 路径 发送什么样的请求, 传递什么样的参数, 可以拿到怎样的结果
app.get("/check_login", function (req, resp) {
    let account = req.query.account;
    let pwd = req.query.pwd;

    for (let i = 0, len = accounts.length; i < len; i++) {
        let item = accounts[i];
        if (account === item.account && pwd === item.pwd) {
            resp.send({
                code: 0,
                msg: "登录成功"
            })
            return;
        }
    }

    resp.send({
        code: -1,
        msg: "登录失败"
    })


    // if (account === "itlike" && pwd === "123") {
    //     resp.send({
    //         code: 0,
    //         msg: "登录成功"
    //     })
    // } else {
    //     resp.send({
    //         code: -1,
    //         msg: "登录失败"
    //     })
    // }

})

// localhost:3000/register?account=123&pwd=456
app.get("/register", function(req, resp){
    console.log(req.query);
    let account = req.query.account;
    let pwd = req.query.pwd;
    accounts.push({
        account: account,
        pwd: pwd
    })

    // 服务 给 客户端 一个响应数据
    resp.send({
        code: 0,
        msg: "注册成功",
        account: account,
        totalAccount: accounts
    })

})

// n. 启动服务器, 并监听指定的端口号
app.listen(3000, function () {
    console.log("服务器启动成功")
})
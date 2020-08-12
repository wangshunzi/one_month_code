const express = require("express");
const execSQLLast = require("./tool/dbTool")
const lbRouter = require("./routers/lbRouter")
const courseRouter = require("./routers/courseRouter")

let app = express();
// /lb/list
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)

// req, response, next

// 借助中间件, 给req, 请求对象, 绑定一些好用的函数
app.use(function (req, resp, next) {
    resp.ResultTMP = function (code, message, data=[]) {
        return  {
            code: code,
            message: message,
            data: data
        }
    };
    resp.execSQL = execSQLLast;
    next()
})

// localhost:3000/api/lb/list
// 静态资源服务
app.use(express.static("public"))

//
app.use("/api/lb", lbRouter)

// 扩展新的接口
app.use("/api/course", courseRouter)

app.listen(3000, function () {
    console.log("服务器启动成功!")
})
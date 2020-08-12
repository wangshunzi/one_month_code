const express = require("express");
const execSQL = require("./tool/dbTool")
const lybRouter = require("./routes/lybRouter")



let app = express();

// 结果模板中间件
app.use(function (req, resp, next) {
    resp.ResultTMP = function (code, message, data=[]) {
        return {
            code,
            message,
            data
        }
    };
    resp.execSQL = execSQL
    next()
})

// 日志记录
app.use(function (req, resp, next) {
    // path method time ua
    let path = req.path;
    let method = req.method;
    let ua = req.headers["user-agent"];
    execSQL("insert into lt_rizhi(path, method, ua) values (?, ?, ?)", [path, method, ua]).then(result=>{
        next()
    }).catch(err=>{
        next()
    })

})

// 中间件: 处理post参数
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 留言板模块相关的api
app.use("/api/lyb", lybRouter)

// 讲师相关的api
// app.use("/api/teacher", teacherRouter)


app.listen(3000, function () {
    console.log("撩学堂服务端启动: localhost:3000/")
})
const express = require("express");
const execSQLLast = require("./tool/dbTool")

let app = express();

// 静态资源服务
app.use(express.static("public"))

// 结果模板
function ResultTMP(code, message, data = []) {
    return {
        code: code,
        message: message,
        data: data
    }
}


app.get("/api/lb_list", function (req, resp) {
    // execSQL("select id, title, img_url from lt_lb;", [], function (result) {
    //     resp.send(ResultTMP(0, "获取列表成功", result))
    // }, function (err_msg) {
    //     resp.send(ResultTMP(-1, err_msg))
    // })

    // execSQL_promise("select id, title, img_url from lt_lb;").then(function (result) {
    //     resp.send(ResultTMP(0, "获取列表成功", result))
    // }).catch(function (err_msg) {
    //     resp.send(ResultTMP(-1, err_msg))
    // })

    // execSQLLast("select id, title, img_url from lt_lb2;", [], function (result) {
    //     resp.send(ResultTMP(0, "获取列表成功", result))
    // }, function (err_msg) {
    //     resp.send(ResultTMP(-1, err_msg))
    // })


    execSQLLast("select id, title, img_url from lt_lb;").then(function (result) {
        resp.send(ResultTMP(0, "获取列表成功", result))
    }).catch(function (err_msg) {
        resp.send(ResultTMP(-1, err_msg))
    })


})

// 扩展新的接口

app.listen(3000, function () {
    console.log("服务器启动成功!")
})
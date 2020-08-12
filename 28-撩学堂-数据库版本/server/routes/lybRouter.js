const express = require("express")

let lybRouter = express.Router()
lybRouter.post("/add_item", function (req, resp) {
    let title = req.body.title;
    let content = req.body.content;

    resp.execSQL("insert into lt_lyb(title, content) values (?, ?);", [title, content]).then(result=>{
        // 新增的id result.insertId

        resp.execSQL("select id, title, content, time from lt_lyb where id=?;", [result.insertId]).then(row=>{
            // 如果新增备忘录 成功, 应该给客户端反馈一个, 新增的这个记录信息
            resp.send(ResultTMP(0, "新增备忘录成功", row))
        })

    }).catch(err=>{
        resp.send(ResultTMP(-1, "新增备忘录失败"))
    })
})
lybRouter.get("/list", function (req, resp) {

    resp.execSQL("select id, title, content, time from lt_lyb;").then(result=>{
        resp.json(resp.ResultTMP(0, "获取列表成功", result))
    }).catch(err=>{
        resp.send(resp.ResultTMP(-1, "获取列表失败"))
    })
})


module.exports = lybRouter;
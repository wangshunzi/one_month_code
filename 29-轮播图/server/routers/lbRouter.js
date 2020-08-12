const express = require("express")

// /list
let lbRouter = express.Router()
lbRouter.get("/list", function (req, resp) {
    resp.execSQL("select id, title, img_url from lt_lb;").then(function (result) {
        resp.send(resp.ResultTMP(0, "获取列表成功", result))
    }).catch(function (err_msg) {
        resp.send(resp.ResultTMP(-1, err_msg))
    })
})

module.exports = lbRouter;

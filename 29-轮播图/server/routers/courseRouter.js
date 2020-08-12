const express = require("express");


let courseRouter = express.Router()
courseRouter.get("/list", function (req, resp) {

    // resp.execSQL()

    resp.send(resp.ResultTMP(0, "获取列表成功", [
        {title: "java", fm: "xxx.png"}
    ]))
})

module.exports = courseRouter;
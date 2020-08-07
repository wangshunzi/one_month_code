
const express = require("express")

let courseRouter = express.Router()
courseRouter.get("/list", function (request, response) {
    response.send([
        {title: "python", fm: "xxx.png"},
        {title: "java", fm: "xxx.png"},
        {title: "h5", fm: "xxx.png"},
    ])
})
courseRouter.get("/add", function (request, response) {
    response.send({
        code: 0,
        msg: "新增成功"
    })
})

module.exports = courseRouter
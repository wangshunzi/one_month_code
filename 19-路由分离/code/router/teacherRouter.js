
const express = require("express")

let teacherRouter = express.Router();

teacherRouter.get("/list", function (request, response) {
    response.send([
        {name: "sz", age: 18},
        {name: "zs", age: 16}
    ])
})
teacherRouter.post("/add", function (request, response) {
    response.send({
        code: 0,
        msg: "新增成功"
    })
})
teacherRouter.get("/delete", function (request, response) {
    response.send({
        code: 0,
        msg: "删除成功"
    })
})
teacherRouter.get("/detail", function (request, response) {
    response.send({
        name: "sz",
        age: 18
    })
})

module.exports = teacherRouter
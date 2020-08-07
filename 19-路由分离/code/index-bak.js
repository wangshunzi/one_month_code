const express = require("express")

let app = express()


// 写接口
app.get("/teacher/list", function (request, response) {
    response.send([
        {name: "sz", age: 18},
        {name: "zs", age: 16}
    ])
})

app.post("/teacher/add", function (request, response) {
    response.send({
        code: 0,
        msg: "新增成功"
    })
})

app.get("/teacher/delete", function (request, response) {
    response.send({
        code: 0,
        msg: "删除成功"
    })
})

app.get("/teacher/detail", function (request, response) {
    response.send({
        name: "sz",
        age: 18
    })
})

app.get("/course/list", function (request, response) {
    response.send([
        {title: "python", fm: "xxx.png"},
        {title: "java", fm: "xxx.png"},
        {title: "h5", fm: "xxx.png"},
    ])
})

app.get("/course/add", function (request, response) {
    response.send({
        code: 0,
        msg: "新增成功"
    })
})


app.listen(3000, function () {
    console.log("服务器启动成功")
})
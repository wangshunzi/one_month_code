const express = require("express")

let app = express()

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

// 应用程序级别的中间件
// 路径
// localhost:3000/teacher/detail
// 只要客户端发送的请求, 路径 /teacher/...
app.use("/teacher", teacherRouter)


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

app.use("/course", courseRouter)


app.listen(3000, function () {
    console.log("服务器启动成功")
})
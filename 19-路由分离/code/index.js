const express = require("express")
const teacherRouter = require("./router/teacherRouter")
const courseRouter = require("./router/courseRouter")

let app = express()

app.use("/teacher", teacherRouter)
app.use("/course", courseRouter)


app.listen(3000, function () {
    console.log("服务器启动成功")
})
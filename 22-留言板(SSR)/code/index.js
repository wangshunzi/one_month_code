const express = require("express");
const dateTool = require("./tool/dateTool")
let app = express()
// 定义一个变量, 存储所有的, 备忘录内容
let items = []
// 告知服务器, 我是用的模板引擎 是 ejs
app.set("view engine", "ejs")


// SSR
// Server Side Render

// 处理post 请求的参数
// 参数, 封装成一个对象, 放在 request.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 新增备忘录路由
app.post("/add_item", function (request, response) {
    request.body.publish_time = dateTool.getCurrentFormatTime()
    // console.log("想xxx 发送了一个post请求", request.body)
    items.unshift(request.body)

    // 重定向
    // 重新确定, 访问的方向
    response.redirect("/")
})

// 设计路由
// / 怎样的界面内容
app.get("/", function (request, response) {
    // index: 代表 模板的文件名
    // 到哪找: views, ejs
    response.render("index", {items})
})

app.get("/add", function (request, response) {
    response.render("add")
})

// 404
app.use(function (request, response) {
    response.render("404")
})
// 500
app.use(function (err, request, response, next) {
    response.render("500")
})


app.listen(3000, function () {
    console.log("服务启动成功")
})
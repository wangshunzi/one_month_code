const express = require("express");
const dateTool = require("./tool/dateTool")


let app = express()


// 跨域中间件处理
let crossDomain = (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    resp.header("Access-Control-Allow-Headers", "Content-Type")
    next()
}
app.use(crossDomain)


// 处理post 请求的参数
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 全局变量, 存放所有的备忘录数据
let items = []

app.get("/api/list", function (request, response) {
    response.send({
        code: 0,
        items: items
    })
})

app.post("/api/add_item", function (request, response) {
    request.body.publish_time = dateTool.getCurrentFormatTime()
    items.unshift(request.body);

    response.send({
        code: 0,
        msg: "新增数据成功"
    })
})





app.listen(3000, function () {
    console.log("服务器启动成功")
})
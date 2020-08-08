const express = require("express")
// const ejs = require("ejs")
const path = require("path")

let app = express()

// 修改模板引擎存放的路径
app.set("views", path.join(__dirname, "view"))
// 告诉express 服务器, 我是用的模板引擎是ejs // 模板的后缀名, 必须是ejs
app.set("view engine", "ejs")

app.get("/", function (request, response) {

    let p = {
        name: "szzzzzz",
        age: 1888888,
        address: "上海2"
    }

    // 参数1: 模板文件的名字
    // 参数2: 数据
    // 操作逻辑: 根据这个模板文件名字, 到 view 文件夹当中, 查找 模板文件名字.ejs 文本
    // 读取这个模板文件的内容(字符串)
    // let result = ejs.render(内容字符串, 数据)
    // 把 result (渲染之后的字符串) 响应给客户端
    response.render("person",{p: p})
    // let content = fs.readFileSync("person.ejs").toString()
    // let result = ejs.render(content, {name: "sz"})
    // response.send(result)


})



app.listen(3000, function () {
    console.log("服务器启动成功")
})
const express = require("express");
let data = require("./data/data.json")

let app = express()

// 告知, 服务器, 我是用的模板引擎是ejs
// ejs.render()
app.set("view engine", "ejs")

app.get("/itlike", function (request, response) {
    response.render("list", {data: data})
})


app.listen(3000, function () {
    console.log("启动成功")
})
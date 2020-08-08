const express = require("express");
const path = require("path")


let app = express()

app.use(express.static("public"))


app.use(function (req, response) {
    let path404 = path.resolve(__dirname, "404.html")
    response.sendFile(path404)
})

app.listen(5000, function () {
    console.log("前端服务器启动成功")
})

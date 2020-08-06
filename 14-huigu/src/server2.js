const express = require("express");

let app = express()


app.get("/", function (req, resp) {
    resp.send("服务器2, 给的一个响应结果")
})

app.listen(4000)
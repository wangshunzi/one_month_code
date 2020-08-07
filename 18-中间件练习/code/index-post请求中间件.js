const express = require("express");
const bodyParser = require("body-parser")

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use(function (request, response, next) {
    // 这个中间, 能否被执行( post )
    console.log(request.body);
    response.send("ok")
})



app.listen(3000, function () {
    console.log("启动成功")
})
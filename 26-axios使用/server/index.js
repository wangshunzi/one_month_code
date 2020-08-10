const express = require("express")

let app = express();

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    response.header("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/list", function (request, response) {
    response.send(request.query)
})


app.post("/test_post", function (request, response) {
    response.send(request.body)
})

app.listen(3000, function () {
    console.log("服务器启动成功")
})
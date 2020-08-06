const express = require("express");
const bodyParser = require('body-parser');

let app = express();


app.use(express.static("../public"))

// 在写路由处理之前, 先执行如下代码
app.use(bodyParser.json());
// 能够处理json格式的参数
app.use(bodyParser.urlencoded({ extended: true }));
// 能够处理普通的&拼接参数




// 静态路由
// get
// "/abc" === "abc"
app.get("/abc", function (request, response) {

    // 服务器端, 如何获取get 请求对应的参数
    // a=1&b=2&a=3
    // { a: [ '1', '3' ], b: '2' }
    console.log(request.query);
    response.send("ok")

})
// post
app.post("/add_item", function (request, response) {
    console.log(request.body);
    response.send("post请求响应数据")
})


// 动态路由
// get
app.get("/article/:id/:parent_id", function (request, response) {
    // 服务器端, 如何获取 动态路由的参数
    console.log(request.params)
    response.send("ok")
})


app.listen(3000, function () {
    console.log("服务器启动成功", "localhost:3000/")
})
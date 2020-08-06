const express = require("express");

// 1. 创建一个服务器
let app = express()

// 2. 路由
// app.get("/", function (req, resp) {
//     resp.send("/")
// })
//
// app.get("/ccc", function (req, resp) {
//     resp.send("/ccc")
// })
//
// app.post("/", function (req, resp) {
//     resp.send("post / ")
// })


let articles = [
    {id: 1, title: "今天吃饭了没", content: "吃的真诚"},
    {id: 3, title: "今天吃饭", content: "吃的多的很"},
]

// 参数: 文章的ID
app.get("/article", function (req, resp) {
    let id = req.query.id
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.id === +id) {
            resp.send(`
                <html>
                    <head>
                        <title>文章的详情</title>
                    </head>
                    <body>
                        <h1>${article.title}</h1>
                        <div>${article.content}</div>
                    </body>
                </html>
            `)
        }
    }

})

app.get("/article/:id", function (req, resp) {
    let id = req.params.id
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.id === +id) {
            resp.send(`
                <html>
                    <head>
                        <title>文章的详情</title>
                    </head>
                    <body>
                        <h1>${article.title}</h1>
                        <div>${article.content}</div>
                    </body>
                </html>
            `)
        }
    }

})



// n. 启动这个服务器
app.listen(3000)

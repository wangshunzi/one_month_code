const express = require("express")
const bodyParser = require("body-parser");
const teacherRouter = require("./router/teacherRouter")
const courseRouter = require("./router/courseRouter")
const mimeType = require("./mime.json")
const path = require("path")
const fs = require("fs")

let app = express()

// /teacher/list

// 静态资源服务
// app.use(function (request, response, next) {
//     let path_str = request.path;
//     let file_path = path.resolve(__dirname, "public"+path_str)
//     console.log(file_path)
//     // C:\Users\50156\Desktop\one_month_code\19-路由分离\code\public\data.txt
//     let result = fs.existsSync(file_path)
//     if (result) {
//         let extName = path.extname(file_path)
//         let m_type = mimeType[extName]
//         response.set("Content-Type", m_type)
//         let content = fs.readFileSync(file_path)
//         // mime.json
//         // 动态的获取content-type
//         // 设置到响应头
//         response.send(content)
//     } else {
//         console.log("文件不存在")
//         next()
//     }
// })

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/teacher", teacherRouter)
app.use("/course", courseRouter)


app.listen(3000, function () {
    console.log("服务器启动成功")
})
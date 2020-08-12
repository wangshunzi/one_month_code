const express = require("express")
const multer = require("multer")
const fs = require("fs");
const path = require("path");

let app = express();
app.use(express.static("public"))

let upload = multer({dest: './public/images'})
app.post("/upload_file", upload.single("header"), function (req, resp) {
    // 起名 唯一 + 后缀名

    // 重命名
    let oldPath = path.resolve(__dirname, req.file.path)
    let newPath = path.resolve(oldPath, "../", Date.now() + Math.random() * 1000 + path.extname(req.file.originalname))
    // console.log(oldPath, newPath)
    fs.renameSync(oldPath, newPath)


    // localhost:3000/images/
    // 其他字段
    console.log(req.body);


    resp.send({
        code: 0,
        message: "文件上传成功"
    })

})


app.listen(3000, function () {
    console.log("服务器启动成功")
})
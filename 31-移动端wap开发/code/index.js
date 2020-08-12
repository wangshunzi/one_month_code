const express = require("express")
const path = require("path")

let app = express();

app.use(express.static("public"))

// app.get("/", function (req, resp) {
//     let f_path = path.resolve(__dirname, "public/test.html")
//     resp.sendFile(f_path)
// })

app.listen(3000, function () {
    console.log("success")
})
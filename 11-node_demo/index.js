const qr = require('qr-image');
const fs = require("fs")
const Jimp = require("jimp")

// png
// let image_data =  qr.imageSync("联通内训", {ec_level: "H", size: 10, margin: 2})
let image_data =  qr.imageSync("联通内训")
fs.writeFileSync("./ewm.png", image_data)


// 图片模糊
Jimp.read("./4.jpeg").then(image=>{

    // 变灰
    // image.greyscale()

    // 高斯模糊
    image.blur(10)


    // 读取二维码图片
    Jimp.read("./ewm.png").then(erm_image=>{
        // 写入到文件中
        let x = (image.bitmap.width - erm_image.bitmap.width) * 0.5
        let y = (image.bitmap.height - erm_image.bitmap.height) * 0.5
        image.mask(erm_image,x, y)
        image.write("./result.png")
    })


})
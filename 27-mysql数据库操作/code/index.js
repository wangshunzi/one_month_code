const execSQL = require("./dbTool");


// execSQL("select * from like_ad", results=>{
//     console.log(results)
// })

// execSQL("insert into like_ad(title, banner_img, course_id) values ('xxx', 'xxx', 1)", function (result) {
//     if (result.affectedRows === 1) {
//         console.log("插入成功", result.insertId)
//     }
// })


// express
// /login

// account pwd
// admin 123

execSQL("select * from like_ad;").then(result=>{
    console.log(result)
}).catch(err=>{
    console.log("有错误", err)
})








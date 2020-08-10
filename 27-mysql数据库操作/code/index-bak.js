// 链接数据库

// 操作数据库表(记录的增删改查)

const mysql = require("mysql");

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'itlike',
    database        : 'like_school'
})

pool.query("select * from like_ad where id=? and title=?;",[16, "abc"], function (err, results, fields) {
    if (!err) {
        console.log(results)
    }
})
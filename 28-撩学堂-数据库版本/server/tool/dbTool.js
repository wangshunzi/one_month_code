const mysql = require("mysql");

// 1. 创建一个连接池
let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    port            : 3306,
    user            : 'root',
    password        : 'itlike',
    database        : 'liaoxuetang_lt'
})


function execSQL(sql, values=[]) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, values, function (err, results, fields) {
            if (err) {
                reject(err.message)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = execSQL;


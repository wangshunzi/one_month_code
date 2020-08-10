const mysql = require("mysql");

let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'itlike',
    database        : 'like_school'
})

// insert into t_user(account, pwd) values (?, ?)
function execSQL(sql,params=[]) {

    return new Promise(function (resolve, reject) {
        pool.query(sql, params, function (err, results, fields) {
            if (!err) {
                resolve(results)
            } else {
                reject(err.message)
            }
        })
    });

}

module.exports = execSQL;


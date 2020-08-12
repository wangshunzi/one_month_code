const mysql = require("mysql");

let pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'itlike',
    database        : 'lunbo'
});


// function execSQL(sql, values, successCB, failCB) {
//     pool.query(sql, values, function (err, result, fields) {
//         if (err) {
//             failCB(err.message)
//         } else {
//             successCB(result)
//         }
//     })
// }
//
// function execSQL_promise(sql, values=[]) {
//     return new Promise(function (resolve, reject) {
//         pool.query(sql, values, function (err, result, fields) {
//             if (err) {
//                 reject(err.message)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }


function execSQL_last(sql, values=[], successCB, failCB) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, values, function (err, result, fields) {
            if (err) {
                if (typeof failCB === "function") {
                    failCB(err.message)
                }
                reject(err.message)
            } else {
                if (typeof successCB === "function") {
                    successCB(result)
                }
                resolve(result)
            }
        })
    })
}



module.exports = execSQL_last
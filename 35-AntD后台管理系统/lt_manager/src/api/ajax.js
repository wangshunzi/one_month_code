import axios from "axios"
import {message} from "antd";

axios.defaults.baseURL = "http://lxt.itlike.com/api/manager/"


// 封装目的
// 解耦
// 方便使用
const ajax = {
    get: function (url, data={}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(response=>{
                let data = response.data
                // data 传递给外界
                resolve(data)
            }).catch(err=>{
                message.warning(err.message)
                reject(err)
            })
        })
    },
    post: function (url, data={}) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(response=>{
                let data = response.data
                // data 传递给外界
                resolve(data)
            }).catch(err=>{
                message.warning(err.message)
                reject(err)
            })
        })
    }
}

export default ajax;

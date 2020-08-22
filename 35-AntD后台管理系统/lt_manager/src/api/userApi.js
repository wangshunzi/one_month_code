import ajax from "./ajax";
import store from "store"

const LT_USER_KEY = 'LT_USER_KEY'

// 业务层的封装
// 账号密码验证

export const checkLogin = (account, password) => ajax.post("admin/login", {account, password})

export const saveUser = (user) => {
    store.set(LT_USER_KEY, user)
}

export const getUser = () => {
    return store.get(LT_USER_KEY) || {}
}

export const delUser = () =>{
    store.remove(LT_USER_KEY)
}

export const isLogin = () => {
    let user = getUser()
    if (user.id === undefined) {
        return false
    }
    return true
}

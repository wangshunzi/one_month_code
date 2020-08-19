import React from "react";
import "./index.css"

class LoginStatus extends React.Component {
    render2() {
        let status = this.props.status
        let loginPane = <div className={"login"}>
            <h1>欢迎你, 管理员</h1>
            <button>退出登录</button>
        </div>
        let logoutPane = <div className={"logout"}>
            <h1>没有登录</h1>
            <button>立即登录</button>

        </div>

        return status ? loginPane : logoutPane
    }

    render() {
        let status = this.props.status

        return <div className={"logout"}>
            <h1>{status ? "欢迎你" : "请登录"}</h1>
            {status ? <button>退出登录</button> : <button>立即登录</button>}
        </div>
    }
}

export default LoginStatus;
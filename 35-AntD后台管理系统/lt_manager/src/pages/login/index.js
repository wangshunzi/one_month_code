import React from "react";
import "./index.less"
import {Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {checkLogin, isLogin, saveUser} from "../../api/userApi";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    onFinish = values => {
        const {account, password} = values;

        // 验证账号和密码是否正确
        checkLogin(account, password).then(result=>{
            if (result.code === 0) {
                // 登录成功
                // 1. 给用户一个提示
                message.success("登录成功, 即将跳转到首页...")

                // 1.2 获取到用户的信息, 保存到本地
                let user = result.user
                saveUser(user)

                // 2. 自动跳转到后台首页 /
                // /
                this.props.history.replace("/")
            } else {
                // 登录失败
                message.error("登录失败, 请重新登录!")
            }
        })
    };
    render() {

        // 肯定没有登录, 登录页面
        // 跳转到后台首页 /
        if (isLogin()) {
            return <Redirect to={"/"}/>
        }

        return (
            <div className={"login_container"}>
                <div className="login_pane">
                    <div className="top">
                        联通-后台管理系统
                    </div>
                    <div className="login_form">
                        <Form
                            name="lt_user_login"
                            className="login-form"
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="account"
                                rules={[
                                    { required: true, message: '请必须输入账号' },
                                    { min: 3, message: "长度必须大于等于3"}
                                    ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请必须输入密码' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="请输入密码"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    立即登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
import React from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import {Button, Layout, message, Modal} from "antd";
import "./index.less"
import {delUser, getUser} from "../../api/userApi";
import {getCurrentFormatTime} from "../../tool/dateTool";
import {withRouter} from "react-router-dom"

const {Header} = Layout;

class RightHeader extends React.Component {

    state = {
        time: getCurrentFormatTime(),
        user_name: ""
    }
    componentDidMount() {
        this.setState({
            user_name: getUser().user_name
        })

        this.timerID = setInterval(()=>{
            // console.log("123")
            this.setState({
                time: getCurrentFormatTime()
            })
        }, 1000)

    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }


    logout = () => {
        Modal.confirm({
            title: '你真的要退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '退出你就得重新登录呦!',
            okText: '就要退出',
            okType: 'danger',
            cancelText: '考虑一下',
            onOk: () => {
                // 1. 删除本地的用户数据
                delUser()
                message.success("退出成功!")
                // 2. 跳转到登录页
                this.props.history.replace("/login")
            }
        });

    }

    render() {

        return (
            <Header className="header_pane">

                {
                    this.props.collapsed
                        ?
                        <MenuUnfoldOutlined className={"trigger"} onClick={this.props.toggle}/>
                        :
                        <MenuFoldOutlined className={"trigger"} onClick={this.props.toggle}/>
                }
                <div className="info">
                    <div className="time">{this.state.time}</div>
                    <div className="welcome">欢迎您: {this.state.user_name}</div>
                    <Button type="primary" danger onClick={this.logout}>退出</Button>
                </div>


            </Header>
        )
    }
}

export default withRouter(RightHeader);
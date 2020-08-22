import React from "react";
import { Result, Button } from 'antd';
import {Link} from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="不存在此界面, 点击按钮, 返回到首页"
                extra={<Button type="primary">
                    <Link to={"/"}>返回首页</Link>
                </Button>}
            />
        )
    }
}

export default NotFound;
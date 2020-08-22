import React from "react";
import "./index.less"
import {Avatar, Card, Col, List, Row, Statistic, Tabs} from "antd";
import {ArrowUpOutlined} from '@ant-design/icons';
import {getScoreInfo, getUserInfo} from "../../api/overviewApi";

const { TabPane } = Tabs;

class OverView extends React.Component {
    state = {
        userInfo: {today: 0, total: 30},
        scoreInfo: []
    }

    componentDidMount() {
        getUserInfo().then(result=>{
            // console.log(result)
            this.setState({
                userInfo: result
            })
        })

        getScoreInfo(5).then(result=>{
            this.setState({
                scoreInfo: result
            })
        })
    }


    callback= (key) => {
        // console.log(key);
        getScoreInfo(key).then(result=>{
            this.setState({
                scoreInfo: result
            })
        })
    }


    render() {
        return (
            <div className={"overview"}>
                <div className="top">
                    <Card className={"card"} title="用户概览" extra={<a href="#">More</a>}>
                        <Row>
                            <Col span={12}>
                                <Statistic
                                    title="今日注册"
                                    value={this.state.userInfo.today}
                                    precision={0}
                                    valueStyle={{color: '#3f8600'}}
                                    prefix={<ArrowUpOutlined/>}
                                    suffix="个"
                                />
                            </Col>
                            <Col span={12}>
                                <Statistic
                                    title="总人数"
                                    value={this.state.userInfo.total}
                                    precision={0}
                                    valueStyle={{color: '#3f8600'}}
                                    suffix="个"
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card className={"card"} title="讲师概览" extra={<a href="#">More</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className={"card"} title="课程概览" extra={<a href="#">More</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className={"card"} title="文章概览" extra={<a href="#">More</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className="content">
                    <Tabs defaultActiveKey="5" onChange={this.callback}>

                        {[5,4,3,2,1].map(value=>{
                            return <TabPane tab={value+"分评价"} key={value}>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={this.state.scoreInfo}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={"http://lxt.itlike.com/"+item.user_header} />}
                                                title={<a href="https://ant.design">{item.user_name}</a>}
                                                description={item.content}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        })}
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default OverView;
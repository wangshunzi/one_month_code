import React from "react";
import {isLogin} from "../../api/userApi";
import {Redirect, Switch, Route} from "react-router-dom";
import {Layout} from 'antd';
import "./index.less"
import NavBar from "../../components/navBar";
import RightHeader from "../../components/rightHeader";
import OverView from "../overView";
import AdCourse from "../adCourse";
import CourseCategory from "../courseCategory";
import NotFound from "../notFound";
import ECharts from "../echarts";


const {Content, Footer} = Layout;


class Admin extends React.Component {

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        if (!isLogin()) {
            // 重定向的标签
            return <Redirect to={"/login"}/>
        }
        return (
            <Layout className={"admin"}>
                <NavBar collapsed={this.state.collapsed}/>
                <Layout className="right_container">
                    <RightHeader collapsed={this.state.collapsed} toggle={this.toggle}/>
                    <Content className="content">

                        <Switch>
                            <Route path={"/course_category"} component={CourseCategory}/>
                            <Route path={"/ad_course"} component={AdCourse}/>
                            <Route path={"/chart"} component={ECharts}/>
                            <Route path={"/"} exact component={OverView}/>
                            <Route component={NotFound}/>
                        </Switch>


                    </Content>
                    <Footer className={"footer"}>中国联通 ©2020 Created by 内蒙大神</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin;
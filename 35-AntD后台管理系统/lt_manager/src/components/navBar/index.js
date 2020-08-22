import React from "react";
import {Layout, Menu} from "antd";
import "./index.less"
import menuItems from "../../config/menuConfig";
import LTIcon from "../../tool/iconTool"
import {Link, withRouter} from "react-router-dom"

const {Sider} = Layout;


class NavBar extends React.Component {
    static defaultProps = {
        collapsed: true
    }

    state = {
        menuItemDOMs: []
    }

    renderMenu() {
        let arr = []
        for (let i = 0, len=menuItems.length; i < len; i++) {
            let item = menuItems[i]
            console.log(item)
            if (item.children) {
                arr.push(
                    <Menu.SubMenu key={item.route} icon={<LTIcon type={item.icon}/>} title={item.title}>
                        {item.children.map(item=>{
                            return  <Menu.Item key={item.route} icon={<LTIcon type={item.icon}/>}>
                                {item.title}
                            </Menu.Item>
                        })}
                    </Menu.SubMenu>
                )
            } else {
                arr.push(
                    <Menu.Item key={item.route} icon={<LTIcon type={item.icon}/>}>
                        {item.title}
                    </Menu.Item>
                )
            }

        }
        this.setState({
            menuItemDOMs: arr
        })
    }


    renderMenuDG(menus) {
        return menus.map(item=>{
            if (item.children === undefined) {
                return  <Menu.Item key={item.route} icon={<LTIcon type={item.icon}/>}>
                    <Link to={item.route}>{item.title}</Link>
                </Menu.Item>
            } else {
                return (
                    <Menu.SubMenu key={item.route} icon={<LTIcon type={item.icon}/>} title={item.title}>
                        {this.renderMenuDG(item.children)}
                    </Menu.SubMenu>
                )
            }
        })
    }


    componentDidMount() {
        // this.renderMenu()
        this.setState({
            menuItemDOMs: this.renderMenuDG(menuItems)
        })

    }

    render() {
        // 获取当前的路由路径
        let pathName = this.props.location.pathname;

        return (
            <Sider className={"nav_bar"} trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    {this.props.collapsed ? "联通": "联通-后台管理系统"}
                </div>
                <Menu theme="dark" mode="inline" selectedKeys={[pathName]}>
                    {this.state.menuItemDOMs}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(NavBar);
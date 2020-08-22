import React from "react";
import "./index.css";
import {Link} from "react-router-dom"


class NavBar extends React.Component {
    render() {
        return (
            <div className={"nav_bar"}>
                <ul>
                    <li><Link to={"/"}>首页</Link></li>
                    <li><Link to={"/teacher"}>讲师</Link></li>
                    <li><Link to={"/box"}>备忘录</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
import React from 'react';
import "./App.css"
import NavBar from "./components/nav";
import {HashRouter, Route, Switch} from "react-router-dom"
import Home from "./pages/home";
import Teacher from "./pages/teacher";
import Box from "./pages/box";


//
// 设计路由规则
// 访问什么样的路径 -> 怎样的界面
// / -> home
// /teacher - > teacher
// /bw -> box

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <NavBar/>
                    <Switch>
                        <Route path={"/teacher"} component={Teacher}/>
                        <Route path={"/box"} component={Box}/>
                        <Route path={"/"} component={Home}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;

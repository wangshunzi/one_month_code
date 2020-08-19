import React from 'react';
import ReactDOM from 'react-dom';
import ListRenderKey from "./components/listRenderKey";
import InputC from "./components/inputC";
import Test from "./components/test";
import App from "./App";
// import App from "./App";

// import Clock from "./components/clock";
// import Counter from "./components/counter";
// import LoginStatus from "./components/loginStatus";
// import ListRender from "./components/listRender";


// webpack
// 支持多种, 模块化实施规范
// node  commonjs: module.exports = "xxx" ; require()
// ES6 模块化规范
// export xxx;   import xxx from 模块名字

// React.createElement("App", null, null)

let v_dom = (
    <div>
        {/*<Clock time={10}/>*/}
        {/*<Clock time={5}/>*/}
        {/*<Counter initValue={2} step={3}/>*/}
        {/*<Counter initValue={5} step={4}/>*/}
        {/*<LoginStatus status={true}/>*/}
        {/*<ListRenderKey/>*/}
        {/*<InputC/>*/}
        {/*<Test/>*/}
        <App/>
    </div>
)

ReactDOM.render(v_dom, document.getElementById('root'));


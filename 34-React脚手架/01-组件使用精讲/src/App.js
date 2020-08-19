



// 组件化 +
// 模块化 +
// 工程化

// let persons = [
//     {name: "sz", age: 18, address: "上海"},
//     {name: "sz2", age: 19, address: "上海2"},
//     {name: "sz3", age: 20, address: "上海3"},
//     {name: "sz4", age: 21, address: "上海4"},
//     {name: "sz5", age: 22, address: "上海5"},
// ]
//
// let func = function (v) {
//     console.log("这是app, 里面的函数", v)
// }

// class App2 extends React.Component {
//
//     state = {
//         teachers: []
//     }
//     componentDidMount() {
//         // 组件被加载时, 调用一次此方法
//         axios.get("http://lxt.itlike.com/api/client/home/star_teacher").then(response => {
//             // console.log(response.data)
//             this.setState({
//                 teachers: response.data
//             })
//         })
//     }
//     render() {
//         console.log(this.state.teachers);
//
//         return (
//             <div className="App">
//                 <Person person={persons[0]} func={func}/>
//
//                 {/*{persons.map(function (item) {*/}
//                 {/*    return <Person person={item}/>*/}
//                 {/*})}*/}
//             </div>
//         );
//     }
// }


import React from 'react';

import ColorBox from "./components/colorBox"
import Home from "./pages/home";

class App extends React.Component {
    render() {
        return (
            <div>
                {/*<ColorBox/>*/}
                <Home/>
            </div>
        )
    }
}

export default App;



// ES6 模块化规范
// 导出内容
// export App;

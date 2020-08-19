import React from "react";
import "./index.css"


class Clock extends React.Component {

    state = {
        num: 10,
        bgColor: "grey"
    }

    componentDidMount() {
        // 组件被加载完毕
        // console.log("组件被加载", this.props.time)
        this.setState({
            num: this.props.time
        })
        // this.setState({
        //     num: this.state.num - 1
        // }, function () {
        //     // 等state数据, 修改完毕之后, 调用, 这个函数
        //     console.log(this.state.num)
        // })

        let clockID = setInterval( () => {
            // 箭头函数内部, 没有自己的this
            // this, 往外层作用域去找
            console.log(this)
            this.setState({
                num: this.state.num - 1
            })
            // console.log(this.state.num)
            if (this.state.num === 0) {
                clearInterval(clockID)
                this.setState({
                    bgColor: "tomato"
                })
            }
        }, 1000)
    }

    render() {
        return (
            <div className={"clock"} style={{backgroundColor: this.state.bgColor}}>
                {this.state.num}
            </div>
        )
    }
}

// class Clock extends React.Component {
//
//     state = {
//         bgColor: "grey"
//     }
//
//     componentDidMount() {
//         // 组件被加载完毕
//         // console.log("组件被加载", this.props.time)
//
//         // this.setState({
//         //     num: this.state.num - 1
//         // }, function () {
//         //     // 等state数据, 修改完毕之后, 调用, 这个函数
//         //     console.log(this.state.num)
//         // })
//
//         // let clockID = setInterval( () => {
//         //     // 箭头函数内部, 没有自己的this
//         //     // this, 往外层作用域去找
//         //     console.log(this)
//         //     this.setState({
//         //         num: this.state.num - 1
//         //     })
//         //     // console.log(this.state.num)
//         //     if (this.state.num === 0) {
//         //         clearInterval(clockID)
//         //         this.setState({
//         //             bgColor: "tomato"
//         //         })
//         //     }
//         // }, 1000)
//
//         // this.props.time = 2;
//     }
//
//     render() {
//         return (
//             <div className={"clock"} style={{backgroundColor: this.state.bgColor}}>
//                 {this.props.time}
//             </div>
//         )
//     }
// }

export default Clock;
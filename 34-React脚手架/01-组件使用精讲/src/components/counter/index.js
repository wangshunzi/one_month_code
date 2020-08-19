import React from "react";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     // 实例对象
    //     this.sum = this.sum.bind(this)
    // }
    state = {
        num : this.props.initValue
    }
    sum = (step) => {
        console.log("累加", this)
        this.setState({
            num: this.state.num + step
        })
        // this.setState(preState=>{
        //     return {
        //         num: preState.num + 1
        //     }
        // })
    }
    render() {
        const {num} = this.state
        return (
            <div>
                <h1>{num}</h1>
                <a href="https://www.baidu.com" onClick={ (evt) => {
                    evt.preventDefault()
                    this.sum(this.props.step)
                }}>累加</a>
                {/*<a href="https://www.baidu.com">xxx</a>*/}
            </div>
        )
    }
}

export default Counter;
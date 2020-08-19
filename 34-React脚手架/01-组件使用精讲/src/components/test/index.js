import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = {

        }
    }

    static getDerivedStateFromProps(nextProps, preState) {
        console.log("getDerivedStateFromProps")
        return null
    }
    render() {
        console.log("render")

        return (
            <div>渲染组件</div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount")
        // setTimeout(()=>{
        //
        //     this.forceUpdate()
        //
        // }, 1000)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnMount")
    }

}

export default Test;

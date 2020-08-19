import React from "react";
import "./index.css"

class Top extends React.Component {
    state = {
        num: 0
    }
    add = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div className="top" onClick={this.add}>
                top
                {this.state.num}
            </div>
        )
    }
}

export default Top;
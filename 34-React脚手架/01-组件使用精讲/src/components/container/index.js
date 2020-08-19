import React from "react";

class Container extends React.Component {
    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        )
    }
}

export default Container;
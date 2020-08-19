import React from "react";
import "./index.css"
import PropTypes from "prop-types"


// let person_data = {
//     name: "person组件内部的数据"
// }

class Person extends React.Component {
    render() {
        const {name="", age="0", address=""} = this.props.person;
        let func = this.props.func;
        // console.log("person----", func)

        return (
            <div className={"person"}>
                <h1>姓名: {name}</h1>
                <h2>年龄: {age}</h2>
                <h3>地址: {address}</h3>
                <button onClick={() => func(123)}>点击传值</button>
            </div>
        )
    }
    static defaultProps = {
        person: {
            name: "sz",
            age: 0,
            address: "占位"
        }
    }
    static propTypes = {
        func: PropTypes.func.isRequired
    }
}


export default Person;
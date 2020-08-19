import React from "react";

class ListRenderKey extends React.Component {
    state = {
        items: [
            // {id: 1, title: "c"},
            {id: 1, title: "a"},
            {id: 2, title: "b"}
        ]
    }
    add = () => {
        this.state.items.unshift({id: 3, title: "c"})
        this.setState({
            items: this.state.items
        })
    }
    render() {
        const {items} = this.state

        return (
            <div>
                <ul>
                    {items.map(v=>{
                        return <li key={v.id}>
                            <input type="checkbox"/>
                            {v.title}
                        </li>
                    })}
                </ul>
                <button onClick={this.add}>点击新增</button>
            </div>
        )
    }
}

export default ListRenderKey;
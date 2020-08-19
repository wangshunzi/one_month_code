import React from "react";

class ListRender extends React.Component {
    state = {
        items: [
            {id: 0, title: "今天要做游戏1"},
            {id: 1, title: "今天要做游戏2"},
            {id: 2, title: "今天要做游戏3"},
            {id: 3, title: "今天要做游戏4"}
        ]
    }
    render() {
        const {items} = this.state
        // let lis = []
        // for (let i = 0, len = items.length; i < len; i++) {
        //     let item = items[i];
        //     lis.push(<li>{item.title}</li>)
        // }
        //
        // [1,2,3].map(function (v) {
        //     return v * v;
        // })

        return (
            <div>
                <ul>
                    {items.map(v=><li key={v.id}>{v.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default ListRender;
import React from "react";
import "./index.css"


class Top extends React.Component {
    _handlerKeyDown = (evt) => {
        if (evt.key === "Enter") {
            this.props.addFunc(this.titleDom.value)
            this.titleDom.value = ""
            // 调用外界传给我的, 新增备忘 方法
        }
    }
    render() {
        return (
            <div className="top">
                <input ref={dom=>this.titleDom = dom} type="text" placeholder={"请输入备忘录内容"} onKeyDown={this._handlerKeyDown}/>
            </div>
        )
    }
}
class Content extends React.Component {

    render() {
        let items = this.props.items
        return (
            <div className="content">
                <ul>
                    {items.map(item=><li key={item.id}>
                        <label>
                            <input type="checkbox" checked={item.isFinished} onChange={(evt)=>{
                                let isFinished = evt.target.checked;
                                let id = item.id;
                                console.log("更新", id, isFinished)
                                this.props.updateFunc(id, isFinished)
                            }}/>
                            &nbsp;&nbsp;{item.title}
                        </label>
                    </li>)}
                </ul>
            </div>
        )
    }
}
class Bottom extends React.Component {

    render() {
        const {finishCount, totalCount} = this.props.info
        return (
            <div className="bottom">
                <div className="left">
                    已完成/总数: {finishCount}/{totalCount}
                </div>
                <div className="right">
                    <button onClick={()=>{
                        this.props.delFunc()
                    }}>清空完成</button>
                </div>
            </div>
        )
    }
}


class Box extends React.Component {
    state = {
        items: [
            {id: 0, title: "准备吃饭", isFinished: true},
            {id: 1, title: "准备放学", isFinished: false},
            {id: 2, title: "准备睡觉", isFinished: true},
        ]
    }
    delFinish = () => {
        let noFinish = this.state.items.filter(v=>!v.isFinished)
        this.setState({
            items: noFinish
        })
    }
    addItem = (title) => {
        let item = {id: this.state.items.length, title, isFinished: false}
        this.state.items.push(item);
        this.forceUpdate()
    }
    updateItem = (id, isFinished) => {
        this.state.items.find(v=>v.id===id).isFinished = isFinished;
        this.forceUpdate()
    }

    render() {
        let {items} = this.state;
        let totalCount = items.length;
        let finishCount = items.filter(v=>v.isFinished).length;

        return (
            <div className={"box"}>
                <Top addFunc={this.addItem}/>
                <Content items={items} updateFunc={this.updateItem}/>
                <Bottom info={{finishCount, totalCount}} delFunc={this.delFinish}/>
            </div>
        )
    }
}

export default Box;
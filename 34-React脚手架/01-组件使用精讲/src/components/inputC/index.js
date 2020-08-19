import React from "react";

class InputC2 extends React.Component {
    state = {
        items: [
            {id: 0, title: "今晚吃饭"}
        ],
        inputV: ""
    }
    _handlerKeyUp = (evt) => {
        if (evt.key === "Enter") {
            // 获取input的值
            let item = {id: this.state.items.length, title: this.state.inputV}
            this.state.items.push(item)

            // this.forceUpdate()
            this.setState({
                // items: this.state.items,
                inputV: ""
            })
        }
    }
    _handlerChange = (evt) => {
        console.log(evt.target.value)
        this.setState({
            inputV: evt.target.value
        })
    }
    render() {
        let {items, inputV} = this.state
        return (
            <div>
                <input type="text" placeholder={"请输入备忘录内容"} onKeyUp={this._handlerKeyUp} value={inputV} onChange={this._handlerChange}/>
                <ul>
                    {items.map(item=><li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}


class InputC3 extends React.Component {
    constructor(props) {
        super(props);

        // 创建一个dom引用对象
        this.myRef = React.createRef()
    }
    state = {
        items: [
            {id: 0, title: "今晚吃饭"}
        ]
    }
    _handlerKeyUp = (evt) => {
        if (evt.key === "Enter") {
            // 获取input的值
            let dom = this.myRef.current
            console.log(dom.value)
            let item = {id: this.state.items.length, title: dom.value}
            this.state.items.push(item)
            dom.value = ""
            this.forceUpdate()
            // this.setState({
            //     // items: this.state.items,
            //     inputV: ""
            // })
        }
    }

    render() {
        let {items} = this.state
        return (
            <div>
                <input ref={this.myRef} type="text" placeholder={"请输入备忘录内容"} onKeyUp={this._handlerKeyUp}/>
                <ul>
                    {items.map(item=><li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}

class InputC extends React.Component {
    
    state = {
        items: [
            {id: 0, title: "今晚吃饭"}
        ]
    }
    _handlerKeyUp = (evt) => {
        if (evt.key === "Enter") {
            // 获取input的值
            let dom = this.inputDOM
            console.log(dom.value)
            let item = {id: this.state.items.length, title: dom.value}
            this.state.items.push(item)
            dom.value = ""
            this.forceUpdate()
            // this.setState({
            //     // items: this.state.items,
            //     inputV: ""
            // })
        }
    }

    render() {
        let {items} = this.state
        return (
            <div>
                <input ref={dom=>{this.inputDOM = dom}} type="text" placeholder={"请输入备忘录内容"} onKeyUp={this._handlerKeyUp}/>
                <ul>
                    {items.map(item=><li key={item.id}>{item.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default InputC;
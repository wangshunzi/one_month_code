import React from "react"
import "./index.css"

// class ColorBox extends React.Component {
//
//     state = {
//         colorInfos: [
//             {title: "red", color: "red"},
//             {title: "green", color: "green"},
//             {title: "orange", color: "orange"},
//             {title: "tomato", color: "tomato"}
//         ],
//         currentIndex: 2
//     }
//
//     render() {
//         let colorInfos = this.state.colorInfos;
//         let currentColorInfo = colorInfos[this.state.currentIndex]
//         return (
//             <div className="color_box">
//                 <div className="content" style={{color: currentColorInfo.color}}>
//                     {currentColorInfo.title}
//                 </div>
//                 <div className="tabs">
//                     {colorInfos.map((item, index)=>{
//                         return <div style={{backgroundColor: item.color}} onClick={()=>{
//                             console.log(index)
//                             this.setState({
//                                 currentIndex: index
//                             })
//                         }}>{item.title}</div>
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }





class ColorBox extends React.Component {

    state = {
        num: 1
    }

    func() {

    }

    func = () => {

    }

    render() {
        console.log("render被调用了, --- 界面重新渲染")
        return (
            <div onClick={()=>{
                this.setState({
                    num: 2
                })
                this.setState({
                    num: 3
                })
                // this.state.num = 10;
                // console.log(this.state.num)
            }}>
                {this.state.num}
            </div>
        )
    }
}


export default ColorBox;
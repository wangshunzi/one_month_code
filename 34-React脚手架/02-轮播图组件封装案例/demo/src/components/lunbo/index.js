import React from "react";
import "./index.css"

// import img_src from "./1.jpeg"
// console.log(img_src)

class Lunbo extends React.Component {

    state = {
        currentIndex: 1
    }

    static defaultProps = {
        data: []
    }

    render() {

        const {data} = this.props
        return (
            <div className="lunbo">
                <div className="container">
                    <ul style={{left: -604 * this.state.currentIndex}}>
                        {data.map(item => <li key={item.id}><a href="#"><img src={item.img_src} alt="1"/></a></li>)}
                    </ul>
                </div>
                <div className="tabbar">
                    <ul>
                        {data.map((item, index) =>
                            <li
                                key={item.id}
                                className={index === this.state.currentIndex ? "active" : ""}
                                onMouseOver={()=>{
                                    this.setState({
                                        currentIndex: index
                                    })
                                }}
                            >
                                {item.title}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Lunbo;
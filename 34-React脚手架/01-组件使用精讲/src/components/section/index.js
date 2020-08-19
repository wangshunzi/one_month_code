import React from "react";
import "./index.css"

// class Section extends React.Component {
//     render() {
//         return (
//             <div className="section">
//                 <div className="top">{this.props.title}</div>
//                 <div className="container">
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <div className="top">
                    {this.props.title}
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Section;
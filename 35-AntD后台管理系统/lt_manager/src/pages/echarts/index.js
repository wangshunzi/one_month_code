import React from "react";
import {Switch, Route} from "react-router-dom"
import CourseTJ from "../courseTJ";
import UserTJ from "../userTJ";
import CommentTJ from "../commentTJ";

class ECharts extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={"/chart/bar"} component={CourseTJ}/>
                    <Route path={"/chart/line"} component={UserTJ}/>
                    <Route path={"/chart/pie"} component={CommentTJ}/>
                </Switch>
            </div>
        )
    }
}

export default ECharts;
import React from "react";
import ReactEcharts from 'echarts-for-react';
import {getCourseInfo} from "../../api/tjApi";

class CourseTJ extends React.Component {

    state = {
        info: []
    }

    getOption(info) {
        return  {
            xAxis: {
                type: 'category',
                data: info.map(item=>item.category_name)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: info.map(item=>item.course_count),
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        }
    }


    componentDidMount() {
        getCourseInfo().then(result=>{
            // console.log(result)
            this.setState({
                info: result
            })
        })
    }

    render() {
        return (
            <div>
                <ReactEcharts option={this.getOption(this.state.info)} />
            </div>
        )
    }
}

export default CourseTJ;
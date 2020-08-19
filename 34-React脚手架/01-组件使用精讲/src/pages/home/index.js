import React from "react";
import Top from "../../components/top";
import Section from "../../components/section";
import Container from "../../components/container";
// import Content from "../../components/content";

class Home2 extends React.Component {



    render() {
        // let v_dom = <Section title={"- 热 . 门 . 好 . 课 -"}>
        //     <a href="">xxxx</a>
        // </Section>
        // console.log(v_dom)
        return (
            <div>
                <Top/>
                <Section title={<a href="#">"- 热 . 门 . 好 . 课 -"</a>} >
                    <div style={{width: 200, height: 250, backgroundColor: "green"}}>热门好课</div>
                    <div style={{width: 200, height: 250, backgroundColor: "green"}}>热门好课</div>
                    <div style={{width: 200, height: 250, backgroundColor: "green"}}>热门好课</div>
                    <div style={{width: 200, height: 250, backgroundColor: "green"}}>热门好课</div>
                    <div style={{width: 200, height: 250, backgroundColor: "green"}}>热门好课</div>
                </Section>
                <Section title={"- 明 . 星 . 讲 . 师 -"}>
                    <div style={{width: 100, height: 200, backgroundColor: "cyan"}}>明星讲师</div>
                    <div style={{width: 100, height: 200, backgroundColor: "cyan"}}>明星讲师</div>
                    <div style={{width: 100, height: 200, backgroundColor: "cyan"}}>明星讲师</div>
                </Section>
            </div>
        )
    }
}


class Lis extends React.Component {

    render() {
        return (
            <React.Fragment>
                <li>1</li>
                <li>2</li>
            </React.Fragment>
        )
    }
}


class Home extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Lis/>
                </Container>
            </div>
        )
    }
}

export default Home;
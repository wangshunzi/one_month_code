import React from 'react';
import "./APP.css"
import Lunbo from "./components/lunbo";


// UI组件库: 很多很好用的组件
// <XXX/>

// UI 组件库

function App() {
  return (
    <div className="App">
       <Lunbo data={[
           {id: 0, title: "投稿倒计时", img_src: "images/1.jpeg"},
           {id: 1, title: "周边上新抽皮肤", img_src: "images/2.jpeg"},
           {id: 2, title: "世冠夏令营", img_src: "images/3.jpeg"},
           {id: 3, title: "世冠淘汰赛分组", img_src: "images/4.jpeg"},
           {id: 4, title: "一往无前的电竞人", img_src: "images/5.jpeg"},
       ]}/>
    </div>
  );
}

export default App;

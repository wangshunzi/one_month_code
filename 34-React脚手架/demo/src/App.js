import React from 'react';
import Top from "./components/top";
import Content from "./components/content"

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Top/>
            <Top/>
            <Content/>
        </div>
    );
  }
}

export default App;



// ES6 模块化规范
// 导出内容
// export App;

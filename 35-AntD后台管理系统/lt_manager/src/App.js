import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom"
import Admin from "./pages/admin";
import Login from "./pages/login";
import './App.less'

// /login -> login
// / -> admin

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
              <Route path={"/login"} component={Login}/>
              <Route path={"/"} component={Admin}/>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

import React from 'react';
import Header from "./Header";
import Login from "./containers/Login";
import Demo from "./containers/Demo";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Admin from "./containers/business/Admin";
import Public from "./containers/business/Public";
import User from "./containers/business/User";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/public">
          <Public />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Demo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

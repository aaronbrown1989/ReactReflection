import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Mastery from "./Mastery";
import Account from "./Account";

//https://dog.ceo/dog-api/documentation/random

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Random Animal pictures!</h1>
          <ul className="header">
            <li><NavLink exact to="/">Random Dog Picture</NavLink></li>
            <li><NavLink to="/Account">Random Cat Pictures</NavLink></li>
            <li><NavLink to="/Mastery">Random Fox Pictures</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Account" component={Account}/>
            <Route path="/Mastery" component={Mastery}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

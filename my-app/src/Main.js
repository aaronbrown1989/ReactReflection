import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import axios from 'axios';
import Home from "./Home";
import Mastery from "./Mastery";
import Account from "./Account";


class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>League of Legends Account Search</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Account">Account Info</NavLink></li>
            <li><NavLink to="/Mastery">Top 3 Mastery</NavLink></li>
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

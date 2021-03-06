import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import RandomDogPage from "./RandomDogPage";
import BreedDogPage from "./BreedDogPage";
import Footer from "./Footer";

//https://dog.ceo/dog-api/documentation/random

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <div className="container">
            <h1>Random Dog pictures!</h1>
          </div>
          <div className="navBackground">
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/RandomDogPage">Random Dog Pictures</NavLink></li>
              <li><NavLink to="/BreedDogPage">Dogs by breed</NavLink></li>
            </ul>
          </div>
          <div className="container">
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/RandomDogPage" component={RandomDogPage}/>
              <Route path="/BreedDogPage" component={BreedDogPage}/>
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Main;

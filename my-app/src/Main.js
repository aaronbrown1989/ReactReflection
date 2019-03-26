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


// `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"{ name }"?api_key=RGAPI-8433dfa0-0e4b-4fc3-9ffa-6ce744c42532`

class Main extends Component {

  state = {
    AccountInfo:[
      {
        "profileIconId":"",
        "name": "",
        "puuid": "",
        "summonerLevel":"",
        "accountId": "",
        "id": "",
        "revisionDate":""
      }
    ]
  }

  performSearch = () => {

  }

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
          <h2>Search Summoner</h2>
          <div class="search-bar">
      			<form id="search-form">
      				<input type="text" name="summoner" placeholder="Summoner Name" />
      				<button type="submit">
      					<span>Search</span>
      				</button>
      			</form>
      		</div>
          <p><small>Search only works for EU west server</small></p>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Account" component={Account}/>
            <Route path="/Mastery" component={Mastery}/>
          </div>
        </div>
        <footer>
          <div>
            <p>
              League of Legneds Account lookup isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
              or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
              trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </p>
          </div>
        </footer>
      </HashRouter>
    );
  }
}

export default Main;

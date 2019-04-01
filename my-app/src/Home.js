import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div>
        <h2>DOGGOS!</h2>
        <div className="main-content">
          <p>
            On this site you will be able to get a random picture of a dog or a random picture of a dog by breed.
          </p>
          <p>
            This site was built using React and React-Router. Using the API from &nbsp;
            <a className="inlineLink" rel='noopener noreferrer' href="https://dog.ceo/dog-api/" target="_blank">
              https://dog.ceo/dog-api
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

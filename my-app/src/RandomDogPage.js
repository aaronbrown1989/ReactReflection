import React, { Component } from "react";
import RandomDog from "./components/RandomDog.js";

class RandomDogPage extends Component {

  render() {
    return (
      <div>
        <h2>Random Dog</h2>
        <p>
          Press button to get a random picture of a dog!
        </p>
        <RandomDog />
      </div>
    );
  }
}

export default RandomDogPage;

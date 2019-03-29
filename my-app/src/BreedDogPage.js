import React, { Component } from "react";
import BreedDog from "./components/BreedDog"

class BreedDogPage extends Component {
  render() {
    return (
      <div>
        <h2>Dog pictures by Breed</h2>
        <div className="main-content">
          <BreedDog />
        </div>
      </div>
    );
  }
}

export default BreedDogPage;

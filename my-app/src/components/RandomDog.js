import React, { Component } from 'react'

class RandomDog extends Component {
  constructor() {
    super();
      this.state = {
        pictures: [],
    };
  }

  callApi = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(results => {
      return results.json();
    }).then(data =>{
      console.log(data)
      this.setState({pictures: data.message});
      console.log("state", this.state.pictures)
    })
  }

  handleButtonClick = () => {
    this.callApi()
  }

  componentDidMount = () => {
    this.callApi()
  }

  render () {
    return(
      <div className="container2">
      <button onClick={this.handleButtonClick.bind(this)}>
        Here boy!
      </button>
        <div className="container1">
          <img alt="Random Dog" src={this.state.pictures} />
        </div>
      </div>
    )
  };
}

export default RandomDog;

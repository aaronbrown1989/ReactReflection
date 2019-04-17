import React, { Component } from 'react'

class RandomDog extends Component {
  constructor() {
    super();
      this.state = {
        pictures: [],
        loading: true
    };
  }

  callApi = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({
        pictures: data.message,
        loading: false
      });
    })
  }

  handleButtonClick = () => {
    this.callApi()
  }

  componentWillMount = () => {
    this.callApi()
  }

  render () {
    return(
      <div className="container2">
      <button onClick={this.handleButtonClick.bind(this)}>
        Here boy!
      </button>
        <div className="container1">
          {
            this.state.loading
            ? <p>Loading...</p>
            : <img alt="Random Dog" src={this.state.pictures} />
          }
        </div>
      </div>
    )
  };
}

export default RandomDog;
